# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-alpha.15](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2024-09-24)


### Build System

* **stylelint:** fix broken rules ([891807f](https://github.com/Graupl/graupl/commit/891807f0a618be0966fb9a6de9a3ee83a23c09a1))

## [1.0.0-alpha.14](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2024-09-24)


### Features

* add basic template for documentation ([2a71c52](https://github.com/Graupl/graupl/commit/2a71c525ef4c7ec57faefce1c4658f9a0d8e45e1))
* **button:** add state classes ([1018e3b](https://github.com/Graupl/graupl/commit/1018e3b8c88ed1fc93565e6f642cba81b08cf1e3))
* **component:** add top bottom and inverse classes to cards ([3199410](https://github.com/Graupl/graupl/commit/3199410c1cb925d2ba485899b0a039c802388e7b))
* **component:** add transition custom props for alerts and fix markup ([b3c479f](https://github.com/Graupl/graupl/commit/b3c479fa351cfdbbfa4b877a2d5481cd6c5859ee))
* **component:** implement alerts ([d493a7f](https://github.com/Graupl/graupl/commit/d493a7fdd58a1f3476988e4162078dbf4d9700eb)), closes [#65](https://github.com/Graupl/graupl/issues/65)
* **component:** implement carousel ([ea613c1](https://github.com/Graupl/graupl/commit/ea613c14b98ddea04a4c3024adcf1b34aca3cfe0)), closes [#87](https://github.com/Graupl/graupl/issues/87)
* **utilities:** add width and height classes ([5d93ed6](https://github.com/Graupl/graupl/commit/5d93ed6e8e85dd553543289db29d8a833b874afd))
* **utility:** add visually hidden classes ([4c7cecc](https://github.com/Graupl/graupl/commit/4c7ceccd14194ccfbb1f67fba8f332f499a3e6db))


### Bug Fixes

* **menu:** adjust min/max width on menu items ([cff88ec](https://github.com/Graupl/graupl/commit/cff88eccb2dada10d98b48595b742ef08b79dc40))


### Code Refactoring

* **alerts:** use new button mixin ([2fe35eb](https://github.com/Graupl/graupl/commit/2fe35ebfd5ade483463f80e5688db976e938301c))


### Build System

* **npm:** update eslint and plugins to latest ([d927eaa](https://github.com/Graupl/graupl/commit/d927eaa7f70da62aad1aa766e32dace8668bb3dc))
* **npm:** update husky ([678341c](https://github.com/Graupl/graupl/commit/678341cca8faa205f75e8a32826bbd1542c93587))
* **npm:** update stylelint plugins ([f54942d](https://github.com/Graupl/graupl/commit/f54942d25b6c094bb8b27b5cae695984b46f4326))

## [1.0.0-alpha.13](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2024-06-04)


### Features

* **base:** add stretched link class ([fc5e4b6](https://github.com/Graupl/graupl/commit/fc5e4b661adcb1141432542a4b93dbaa30d4d154))
* **base:** implement states and extras into both buttons and links ([161b34b](https://github.com/Graupl/graupl/commit/161b34b7dc83b4964cd75a1426dc4a8168d06ced))
* **component:** implement cards  ([34e9d08](https://github.com/Graupl/graupl/commit/34e9d08dcf0eb46970bbdeb2a30346dcf03421ed)), closes [#63](https://github.com/Graupl/graupl/issues/63)
* **component:** implement flex columns component ([6373947](https://github.com/Graupl/graupl/commit/6373947a1d844a9dec0f4cd18837aa5768a804a8))
* **component:** implement menu and navigation components ([ce93a72](https://github.com/Graupl/graupl/commit/ce93a72f6154211f2ae48efb6e0e0b551bb66e24))
* **function:** handle transparent and other standard colors in theme.get() ([3c3a7cf](https://github.com/Graupl/graupl/commit/3c3a7cf70fb0df8a58f6668ce4a0b620353985fc))
* **props:** add new border prop to all elements ([d7de8c2](https://github.com/Graupl/graupl/commit/d7de8c223293fefec10d29e012172abb256f767d))
* **utility:** add order utilities ([24c7026](https://github.com/Graupl/graupl/commit/24c7026cfdbcf02de3ef86b07e0ecad68b3b4751))
* **utility:** add ratio classes ([526197d](https://github.com/Graupl/graupl/commit/526197db0dcae9ff426619853261024244f30620))


### Bug Fixes

* **buttons:** use proper theme get function for button variants ([7baa57a](https://github.com/Graupl/graupl/commit/7baa57a211e34fc1b0650e47f7cd8222e0c732a2))
* rename font-size to font-size-base for consistency ([3537141](https://github.com/Graupl/graupl/commit/35371415ccd1a875b045d71fc5ddc4998be37870))
* use unset for flex columns fill ([fdaa10b](https://github.com/Graupl/graupl/commit/fdaa10b0cfcab8fbf5652f7a5aaa40dddb917059))


### Performance Improvements

* **button:** simplify disabled button code ([582bcac](https://github.com/Graupl/graupl/commit/582bcacae7abc3b92d5bb58943ca25033f90f720))
* **columns:** adjust both normal and flex columns to work better in various screen sizes ([16c133b](https://github.com/Graupl/graupl/commit/16c133b060e3fd9eecd677d91c861d15033dda6c))


### Documentation

* add mode toggle to html ([a22f12d](https://github.com/Graupl/graupl/commit/a22f12dbace5bcc6119c3588c5ed9ff494fe9fd1))
* add spacing to example html ([3758642](https://github.com/Graupl/graupl/commit/37586421220f9dc97a083bc51d10038028fe3219))

## [1.0.0-alpha.12](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2024-05-24)


### Features

* allow all selectors to be customized ([270d3f4](https://github.com/Graupl/graupl/commit/270d3f4fca5c218ecba3831a24e0cbedb009c469))
* **base:** add collapsed option for tables ([5f86b6d](https://github.com/Graupl/graupl/commit/5f86b6d82430de9d99c33359fbf36fa450fd98bf))
* implement normalize.css into library ([f4b4614](https://github.com/Graupl/graupl/commit/f4b4614f475aa601f986de4e5bbe7b62a24797eb))
* **utilities:** add auto spacers ([d5893bb](https://github.com/Graupl/graupl/commit/d5893bb41b4bfea776c6760b7117de404e7d84e8))


### Bug Fixes

* **buttons:** remove text decoration and add cursor for links that are buttons ([844dd10](https://github.com/Graupl/graupl/commit/844dd1072d92af34cb9f19b5eea4227b523c860b))


### Documentation

* **comments:** standardize file comments ([659e1ac](https://github.com/Graupl/graupl/commit/659e1acd8112620a9ed1e577df053e648687e7ac))

## [1.0.0-alpha.11](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2024-05-21)


### Features

* allow buttons and links to look like eachother ([87aae2f](https://github.com/Graupl/graupl/commit/87aae2f87e2c3ea76fda1938345dec936b3ace8b))


### Code Refactoring

* **tables:** sync default colours with root colours ([b91f59c](https://github.com/Graupl/graupl/commit/b91f59c1c10953c41208b53f92a519195f1bacf9))
* **variable:** change root-font-color to root-color ([4b04a5c](https://github.com/Graupl/graupl/commit/4b04a5c67c3187f48351eb5b0edf7aaf646c0dd8))

## [1.0.0-alpha.10](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2024-05-14)


### Features

* link button and form backgrounds to root background ([cbfc6e5](https://github.com/Graupl/graupl/commit/cbfc6e5bc9f37e5a72042185c5f3b7f6a5be58ed))
* **utility:** add alignment utilities ([5183e13](https://github.com/Graupl/graupl/commit/5183e137ef130c3d4f45f92a132bb98fdf1748ac))
* **utility:** add display utilities ([490748d](https://github.com/Graupl/graupl/commit/490748dc92e267be8df6af9c1935a8154481547a))
* **utility:** add flex utilities ([fc85be3](https://github.com/Graupl/graupl/commit/fc85be3b7de06a0294705895e83ae5293ffd3103))
* **utility:** add inset utilities ([f148b50](https://github.com/Graupl/graupl/commit/f148b504c6e21382100f16f9c5ed4d5d203f1dcc))
* **utility:** add justification utilities ([92ae016](https://github.com/Graupl/graupl/commit/92ae01677797e3284edd463d1c5b2e34a6cd7da0))
* **utility:** add list utilities ([8867ace](https://github.com/Graupl/graupl/commit/8867acec69845264726397bfa6a7202655865231))
* **utility:** add position utilities ([0ec0f89](https://github.com/Graupl/graupl/commit/0ec0f89a8a8d89d0a486be609f5b3d30369570b4))
* **utility:** add visibility utilities ([6c5dcd2](https://github.com/Graupl/graupl/commit/6c5dcd256c7255db7c5cff9d39a0debf198910a6))
* **utility:** allow class customization and standardize color classes ([708c8c3](https://github.com/Graupl/graupl/commit/708c8c352e6713b3ab382e93c6ccf396a113368d))
* **utility:** allow class customization for typography classes ([9bc66b6](https://github.com/Graupl/graupl/commit/9bc66b689dca897bb64a779e910402bdad141c98))

## [1.0.0-alpha.9](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2024-05-13)


### Build System

* **npm:** refine exports ([8f40fe8](https://github.com/Graupl/graupl/commit/8f40fe88234032cff2782622a348dcb4cbf42541))

## [1.0.0-alpha.8](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2024-05-03)


### Features

* **button:** add sass map to control theme shades for each variant ([e94f530](https://github.com/Graupl/graupl/commit/e94f530c78d82cef20a509816adac805e30735f4))
* **screen:** reduce and modernize media queries and mixins ([7b5fc3c](https://github.com/Graupl/graupl/commit/7b5fc3c3e7a2fd2ca6001a8a16a6e58d78d4da3f))
* **table:** add sass map to control theme shades for each variant ([64f36e2](https://github.com/Graupl/graupl/commit/64f36e2bf8da79ba2f149202d573cca9a28fd041))


### Bug Fixes

* **sass:** correct table caption side variable name ([d958294](https://github.com/Graupl/graupl/commit/d958294347ead86528123b5056193721563bd7b2))
* **sass:** remove defaults from custom prop variables ([151ad89](https://github.com/Graupl/graupl/commit/151ad8905a435ab631714ebf6a98a8107fac5c9e))
* **sass:** remove defaults from variables and fix transition name ([55e4a2e](https://github.com/Graupl/graupl/commit/55e4a2e21acad2fd26e02e7834c37c9bfcec100f))

## [1.0.0-alpha.7](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2024-05-01)


### Features

* add top margin to headings ([9fc42f1](https://github.com/Graupl/graupl/commit/9fc42f19e4a524279c1107201799035f109b8e5b))
* **component:** add input groups ([bf7ecd2](https://github.com/Graupl/graupl/commit/bf7ecd2b36d9bc49ae530a36a5fb6c961203619d))
* implement table base and component styles ([7cb1552](https://github.com/Graupl/graupl/commit/7cb15522922189e0f17851260da81677acca6abc)), closes [#24](https://github.com/Graupl/graupl/issues/24)
* **mixin:** implement proper screen media queries ([6c4f6d6](https://github.com/Graupl/graupl/commit/6c4f6d6738c876ef8a6f4273375155eb21f0aa55))
* use theme-specific button text colours ([d6b3276](https://github.com/Graupl/graupl/commit/d6b327692dab24c1dbc0d169e4c98a8685ad4745))
* **utility:** add writing direction specific spacers ([73b43ce](https://github.com/Graupl/graupl/commit/73b43ce3d87d5d5c6f285cb906ccb8ee0f5c47d5)), closes [#40](https://github.com/Graupl/graupl/issues/40)


### Bug Fixes

* **component:** correct field group column width ([6488aa5](https://github.com/Graupl/graupl/commit/6488aa52eafc3a6d61ce89327a3f32f17be42073)), closes [#44](https://github.com/Graupl/graupl/issues/44)
* **docs:** correct path to functions ([e75207c](https://github.com/Graupl/graupl/commit/e75207c088604485764b01045521471aabecb2dd))
* **typography:** use correct index for small text ([1685433](https://github.com/Graupl/graupl/commit/1685433c80a1d10b9355312b296a5eba7f959fd1))


### Code Refactoring

* **layout:** move container custom props to proper file ([4f4acde](https://github.com/Graupl/graupl/commit/4f4acded89c5b072f21d636e53fa8810e87e9972))
* **maps:** add custom versions of maps to override ([6150442](https://github.com/Graupl/graupl/commit/61504424120300e94cdb409e9912cd4c3692ff9d))
* **scss:** separate compiled and source scss ([4ce7bbb](https://github.com/Graupl/graupl/commit/4ce7bbb882e4b46c47ab64f56080d7f68a27d50c))
* **typography:** rename bold-font-weight to font-weight-bold ([b9d7c04](https://github.com/Graupl/graupl/commit/b9d7c04a25a8c8c1a3a883871c5017e396fd4cf4))


### Build System

* **npm:** add postbuild script to ensure docs build during tests ([54b5e18](https://github.com/Graupl/graupl/commit/54b5e18eff9e183030817f037aac329bd15b2239))

## [1.0.0-alpha.6](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2024-04-29)


### Features

* add typography theme and utility styles ([b60f500](https://github.com/Graupl/graupl/commit/b60f500e78fe79edd8dede398633d73041140d3d))
* **utilities:** add spacer utilities and replace gap with spacers ([f4a49f8](https://github.com/Graupl/graupl/commit/f4a49f8d21a56121afe7ad5ea060307cc1a5909d))


### Bug Fixes

* **layout:** split columns gap into row and column ([9b42185](https://github.com/Graupl/graupl/commit/9b42185d0990839b58bdef947e404d838af7f9c3))


### Reverts

* Revert "chore(release): 1.0.0" ([014c9ec](https://github.com/Graupl/graupl/commit/014c9eca1096234c7bd71ecc787a30129982493d))


### Build System

* bump cssnano from 6.1.2 to 7.0.1 ([489c460](https://github.com/Graupl/graupl/commit/489c4605705d1af4cffc504a3eeef63911afad7e))
* bump postcss-discard-comments from 6.0.2 to 7.0.0 ([1c39c0e](https://github.com/Graupl/graupl/commit/1c39c0e421eba6231114e1f553811400e909b979))

## [1.0.0-alpha.5](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2024-04-23)


### Bug Fixes

* allow multiple default files to accept overrides ([#28](https://github.com/Graupl/graupl/issues/28)) ([da7ffa0](https://github.com/Graupl/graupl/commit/da7ffa0685e70cf90645c77148171ec505b6455b))


### Build System

* **npm:** remove dist before compiling sass ([02505b7](https://github.com/Graupl/graupl/commit/02505b761c8197ea8acb928cccce02ca2a4404d9))

## [1.0.0-alpha.4](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2024-04-22)


### Features

* **theme:** add variables for root font and background ([a7997e8](https://github.com/Graupl/graupl/commit/a7997e85b939dac5a2105d931d3a97010de14a6a))


### Code Refactoring

* **utilities:** use bg- and text- for color utilities ([9709b32](https://github.com/Graupl/graupl/commit/9709b32a6651b92dd49d5a151cf13d94ca3720bf))

## [1.0.0-alpha.3](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2024-04-20)


### Features

* **theme:** add ability to generate new theme colours automatically ([df0ad39](https://github.com/Graupl/graupl/commit/df0ad391ff0b122c55867b518ccfaa7cd6141ced))
* **utilities:** add background and color utilities ([ef14a15](https://github.com/Graupl/graupl/commit/ef14a15e0d5934249829a9d6ef04014aa63a0e08)), closes [#11](https://github.com/Graupl/graupl/issues/11)


### Bug Fixes

* **accessibility:** add reduced motion handling on buttons ([2a33df0](https://github.com/Graupl/graupl/commit/2a33df00ddddf267f813160644b1f8c6a847e7a4))
* **buttons:** handle disabled state ([1b2e859](https://github.com/Graupl/graupl/commit/1b2e859d57cdad9a3f2021ff6c7917800f80f34a)), closes [#9](https://github.com/Graupl/graupl/issues/9)
* **state:** correct layer order for states to override ([afd87e4](https://github.com/Graupl/graupl/commit/afd87e4ec7c3957040b3701eaeb482768a366083))


### Code Refactoring

* change .columns- to .count- ([45d0970](https://github.com/Graupl/graupl/commit/45d0970fcca3c39a57a10e0cb7c4c18a2b36f31e))


### Documentation

* add basic example of how to override defaults ([a808eeb](https://github.com/Graupl/graupl/commit/a808eebfd7ab7e97be6b491b94886c68757bde1a)), closes [#10](https://github.com/Graupl/graupl/issues/10)
* correct link to github ([847c074](https://github.com/Graupl/graupl/commit/847c07413ebdcbc32009e3b51f77eb1e2e5e4481))


### Build System

* **npm:** define exports ([e321b9c](https://github.com/Graupl/graupl/commit/e321b9c54a608795badc1f1f2f1468583694ccff))
* **postcss:** re-enable cssnano ([cdd9cfc](https://github.com/Graupl/graupl/commit/cdd9cfc29a2c2d57447da86ba9258714070e61fd))

## [1.0.0-alpha.2](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2024-04-18)


### Features

* use full spectrum of available colour shades ([24ed3f3](https://github.com/Graupl/graupl/commit/24ed3f370ea43cc2454fd664a87eb83c9c9d00db))


### Bug Fixes

* **form:** handle disabled fieldsets ([5a50979](https://github.com/Graupl/graupl/commit/5a50979d52461ecd46b303d353ab10f5fc67fafb))

## [1.0.0-alpha.1](https://github.com/Graupl/graupl/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2024-04-17)


### Features

* add form base styles and components ([daee446](https://github.com/Graupl/graupl/commit/daee4461842c2a412f45478035855bb3a6a65ee5))
* add tertiary colour for more options ([37cb0de](https://github.com/Graupl/graupl/commit/37cb0de0ba2162b5640ee64a41e000a1758fd591))
* **layout:** add ability to span columns ([677c781](https://github.com/Graupl/graupl/commit/677c7811f6edd59df58e8ba727220624c74d1d52))


### Bug Fixes

* **theme:** add correct color scheme to theme modes ([b740200](https://github.com/Graupl/graupl/commit/b7402007ee889082a729d7dd7f8dec63c08bf0c8))

## 1.0.0-alpha.0 (2024-04-15)


### Features

* add components ([12c2e48](https://github.com/Graupl/graupl/commit/12c2e4867df28695f9c5b6134a1a6c227072d507))
* add link base styles ([c3a9bc1](https://github.com/Graupl/graupl/commit/c3a9bc110c6223ae9fc6248b05f1566589e9586c))
* **columns:** add column count classes ([50dbc6c](https://github.com/Graupl/graupl/commit/50dbc6cd85b1f57cc336c2e4ce665d413803800c))
* **component:** implement buttons ([6d747b3](https://github.com/Graupl/graupl/commit/6d747b338f4a4d6acc2575ac62e548c7fae11ba3))
* fix buttons and structure ([aa8f62e](https://github.com/Graupl/graupl/commit/aa8f62e82d265dc93dc48ea8b70e3cd1694924c9))
* implement layer mixin ([2014476](https://github.com/Graupl/graupl/commit/20144761d8a405a40f8e94def84f605e1412cc3e))
* implement prefix into all custom props ([73fb04e](https://github.com/Graupl/graupl/commit/73fb04ea2601ae6169ea81f4ccab1ef001b7c4ec))
* implement theme ([40b4931](https://github.com/Graupl/graupl/commit/40b493151607fc22992500c5ac60bc577e403388))
* initial commit ([f457139](https://github.com/Graupl/graupl/commit/f457139a66dfcfde82fad6dd28754d266d337ab0))


### Bug Fixes

* use interpolation in all custom prop declarations ([a7d347c](https://github.com/Graupl/graupl/commit/a7d347c5b6b0f321511cb3e8006fc10fcc640dfa))


### Code Refactoring

* change name of default file ([238a878](https://github.com/Graupl/graupl/commit/238a8788bb0a4f0425a8d9aa58129d402dfee8ee))
* merge components ([aec50a0](https://github.com/Graupl/graupl/commit/aec50a057cfe63d3d7b05afb7d2f156bc56b1596))


### Build System

* **npm:** add lint and release scripts ([2c074d6](https://github.com/Graupl/graupl/commit/2c074d65b3401b5e0474945bc215c405bd3bc064))
* **npm:** add remaining dev and build tools ([1ceac67](https://github.com/Graupl/graupl/commit/1ceac67c8cd2eddc5ad5c49cbd7d82a88729d940))
* **npm:** setup package ([be78d5b](https://github.com/Graupl/graupl/commit/be78d5ba5d6bfae27267f5c1cf454173ea41e7cb))


### Documentation

* add custom theme ([af0ddf2](https://github.com/Graupl/graupl/commit/af0ddf29c652e04e2ca15708911384e197fc9dc3))
* add github and vitepress docs ([964b932](https://github.com/Graupl/graupl/commit/964b932b89a39e2c7f841547a12b356b068bb216))
* **base:** update to proper base ([8474ee4](https://github.com/Graupl/graupl/commit/8474ee483204a0c153bba706fcc77e91d032a991))
