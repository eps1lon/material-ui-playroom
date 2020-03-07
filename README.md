# material-ui-playroom
[seek-oss/playroom](https://github.com/seek-oss/playroom) with Material-UI components using some demos from the docs

## local development
Clone including submodules
- nvm use
- yarn
- yarn start

### Bump Material-UI

```bash
$ git submodule update --init --recursive
$ cd material-ui
$ git checkout $VERSION
$ cd ..
$ node scripts/updateDemos
# bump package.json versions
```
remove me