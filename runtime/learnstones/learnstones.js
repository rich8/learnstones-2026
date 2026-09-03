(function () {
  "use strict";

  var RESPONSE_CLASSES = ["ls_menu0", "ls_menu1", "ls_menu2", "ls_menu3", "ls_menu4"];
  var LIGHTS = [
    { response: 1, marker: "ls_lightsl1", caption: "I don't understand" },
    { response: 2, marker: "ls_lightsl2", caption: "I'm not sure" },
    { response: 3, marker: "ls_lightsl3", caption: "I get it" }
  ];
  var LOCAL_LESSON_LINKS = {
    "http://learnstones.com/lessons/html-basics-2/": "html-basics-2.html",
    "https://learnstones.com/lessons/html-basics-2/": "html-basics-2.html",
    "http://learnstones.com/lessons/css-style/": "css-style.html",
    "https://learnstones.com/lessons/css-style/": "css-style.html",
    "http://learnstones.com/lessons/internal-links/": "internal-links.html",
    "https://learnstones.com/lessons/internal-links/": "internal-links.html"
  };

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function stripFrontMatter(markdown) {
    return markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
  }

  function splitSlides(markdown) {
    return stripFrontMatter(markdown)
      .split(/^\s*(?:---|<hr\s*\/?>)\s*$/im)
      .map(function (slide) {
        return slide.trim();
      })
      .filter(Boolean);
  }

  function textFromSlide(source) {
    var match = source.match(/^#\s+(.+)$/m);
    if (match) {
      return match[1].replace(/[`*_]/g, "").trim();
    }
    match = source.match(/^\s*(.+)\s*\n=+\s*$/m);
    if (match) {
      return match[1].replace(/[`*_]/g, "").trim();
    }
    match = source.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    if (match) {
      var holder = document.createElement("div");
      holder.innerHTML = match[1];
      return holder.textContent.replace(/\s+/g, " ").trim();
    }
    return "Slide";
  }

  function fallbackMarkdown(markdown) {
    var html = markdown
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, function (_, lang, code) {
      return "<pre><code class=\"language-" + lang + "\">" + code.trim() + "</code></pre>";
    });
    html = html.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>");
    html = html.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>");
    html = html.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
    html = html.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>");
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "<img alt=\"$1\" src=\"$2\">");
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\">$1</a>");
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    html = html.replace(/^\s*&gt;\s+(.+)$/gm, "<blockquote>$1</blockquote>");
    html = html.replace(/^\s*-\s+(.+)$/gm, "<ul><li>$1</li></ul>");
    html = html.replace(/^\s*\d+\.\s+(.+)$/gm, "<ol><li>$1</li></ol>");
    html = html.replace(/<\/ul>\n<ul>/g, "");
    html = html.replace(/<\/ol>\n<ol>/g, "");
    html = html.replace(/^(?!<h|<u|<o|<l|<p|<b|<pre)(.+)$/gm, "<p>$1</p>");
    return html;
  }

  function renderMarkdown(markdown) {
    if (window.markdownit) {
      return window.markdownit({
        html: true,
        linkify: true,
        typographer: false
      }).render(markdown);
    }
    if (/<\/?[a-z][\s\S]*>/i.test(markdown)) {
      return markdown;
    }
    return fallbackMarkdown(markdown);
  }

  function localizeLessonLinks(root) {
    root.querySelectorAll("a[href]").forEach(function (anchor) {
      var local = LOCAL_LESSON_LINKS[anchor.href];
      if (local) {
        anchor.href = local;
      }
    });
  }

  function createButton(className, text, title) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;
    if (title) {
      button.title = title;
      button.setAttribute("aria-label", title);
    }
    return button;
  }

  function loadState(key, count) {
    var defaults = Array(count).fill(0);
    try {
      var saved = JSON.parse(localStorage.getItem(key));
      if (!Array.isArray(saved)) {
        return defaults;
      }
      return defaults.map(function (_, index) {
        var value = Number(saved[index] || 0);
        return value >= 0 && value < RESPONSE_CLASSES.length ? value : 0;
      });
    } catch (_) {
      return defaults;
    }
  }

  function saveState(key, responses) {
    try {
      localStorage.setItem(key, JSON.stringify(responses));
    } catch (_) {
      return false;
    }
    return true;
  }

  function setResponseClass(element, response) {
    RESPONSE_CLASSES.forEach(function (className) {
      element.classList.remove(className);
    });
    element.classList.add(RESPONSE_CLASSES[response] || RESPONSE_CLASSES[0]);
  }

  function buildStoneMenu(slides, responses, selectSlide) {
    var stones = document.createElement("div");
    var table = document.createElement("table");
    var numberRow = document.createElement("tr");
    var titleRow = document.createElement("tr");

    stones.className = "ls_stones";

    slides.forEach(function (slide, index) {
      var numberCell = document.createElement("td");
      var numberButton = createButton("ls_menuimg", String(index + 1), "Go to slide " + (index + 1));
      numberButton.dataset.menu = "ls_menu" + index;
      setResponseClass(numberButton, responses[index]);
      numberButton.addEventListener("click", function () {
        selectSlide(index);
      });
      numberCell.appendChild(numberButton);
      numberRow.appendChild(numberCell);

      var titleCell = document.createElement("td");
      var wrapper = document.createElement("div");
      var titleButton = createButton("ls_menu_input ls_menu_input_ls ls_menu_input_align", slide.title, "Go to " + slide.title);
      titleCell.className = "ls_rotated";
      titleButton.dataset.menu = "ls_menu" + index + "item";
      titleButton.addEventListener("click", function () {
        selectSlide(index);
      });
      wrapper.appendChild(titleButton);
      titleCell.appendChild(wrapper);
      titleRow.appendChild(titleCell);
    });

    table.appendChild(numberRow);
    table.appendChild(titleRow);
    stones.appendChild(table);
    return stones;
  }

  function buildLights(markSlide) {
    var list = document.createElement("ul");
    list.className = "ls_lights";

    LIGHTS.forEach(function (light) {
      var item = document.createElement("li");
      var icon = createButton("ls_lightsspan " + light.marker, "", light.caption);
      var label = createButton("ls_lightsa ls_lightsa" + light.response, light.caption);

      icon.addEventListener("click", function () {
        markSlide(light.response);
      });
      label.addEventListener("click", function () {
        markSlide(light.response);
      });

      item.appendChild(icon);
      item.appendChild(label);
      list.appendChild(item);
    });

    return list;
  }

  function start(app, markdown) {
    var sourceSlides = splitSlides(markdown);
    var slides = sourceSlides.map(function (source) {
      return {
        title: textFromSlide(source),
        html: renderMarkdown(source)
      };
    });
    var storageKey = app.dataset.storageKey || "learnstones:lesson";
    var responses = loadState(storageKey, slides.length);
    var current = 0;

    var shell = document.createElement("div");
    var menu = document.createElement("div");
    var menuInner = document.createElement("div");
    var stage = document.createElement("section");

    shell.className = "learnstones-shell";
    menu.className = "ls_menu";
    menuInner.className = "learnstones-menu-inner";
    stage.className = "learnstones-stage";

    function update() {
      var slideNodes = stage.querySelectorAll(".learnstones-slide");
      var stoneButtons = menu.querySelectorAll(".ls_menuimg");

      slideNodes.forEach(function (node, index) {
        node.classList.toggle("is-active", index === current);
      });
      stoneButtons.forEach(function (button, index) {
        button.classList.toggle("ls_menu_active", index === current);
        setResponseClass(button, responses[index]);
      });

      document.title = slides[current].title + " | Learnstones";
    }

    function selectSlide(index) {
      if (index < 0 || index >= slides.length || index === current) {
        return;
      }
      current = index;
      update();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function markSlide(response) {
      responses[current] = response;
      saveState(storageKey, responses);
      if (current < slides.length - 1) {
        current += 1;
      }
      update();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    menuInner.appendChild(buildStoneMenu(slides, responses, selectSlide));
    menu.appendChild(menuInner);

    slides.forEach(function (slide, index) {
      var section = document.createElement("article");
      var content = document.createElement("div");
      section.className = "learnstones-slide";
      section.setAttribute("aria-label", "Slide " + (index + 1) + ": " + slide.title);
      content.className = "learnstones-content";
      content.innerHTML = slide.html;
      localizeLessonLinks(content);
      section.appendChild(content);
      section.appendChild(buildLights(markSlide));
      stage.appendChild(section);
    });

    document.addEventListener("keydown", function (event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        selectSlide(current + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        selectSlide(current - 1);
      }
    });

    shell.appendChild(menu);
    shell.appendChild(stage);
    app.replaceChildren(shell);
    update();
  }

  ready(function () {
    var app = document.getElementById("learnstones");
    if (!app) {
      return;
    }

    fetch(app.dataset.lesson)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Unable to load " + app.dataset.lesson);
        }
        return response.text();
      })
      .then(function (markdown) {
        start(app, markdown);
      })
      .catch(function (error) {
        app.innerHTML = "<div class=\"learnstones-error\">" + error.message + "</div>";
      });
  });
}());
