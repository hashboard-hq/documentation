# Hashboard documentation

User-facing documentation for [Hashboard](https://hashboard.com) built with nextra / nextjs.

## Running the docs locally

```bash
# Pull down the git repo locally: 
git clone git@github.com:hashboard-hq/documentation.git

cd documentation

npm install

# Run in watch mode. Warning: search will not work in watch mode.
npm run dev
```

## Building production versions of the docs

```bash
# This command will build the entire site into the `site` directory as files
npm run build

# Serve the site. The search should work.
npm run start
```
