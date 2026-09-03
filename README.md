# Learnstones 2026

Static lesson pages for <https://hivbe.com/ls/>.

Each reconstructed lesson consists of a human-readable Markdown source and a
small HTML loader. The shared renderer is in `runtime/learnstones/`.

## Local development

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Remotes and deployment

- `origin` is the public GitHub repository.
- `prod` is the bare repository on the hivbe server.

Deploy the committed `master` branch with:

```bash
git push origin master
git push prod master
```

The production repository's post-receive hook checks `master` out into
`/var/www/html/ls`. It deliberately does not run `git clean`, so files already
on the server but not tracked by this repository are not deleted.
