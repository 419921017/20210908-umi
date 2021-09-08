// export function patchRoutes({ routes }) {
//   console.log('routes', routes);
//   const Foo = {
//     path: '/foo',
//     exact: true,
//     component: require('./Foo').default,
//   };
//   routes.unshift(Foo);
// }

let extraRoutes = [];

export function modifyClientRenderOpts(opts) {
  console.log('opts', opts);
  opts.routes.unshift(...extraRoutes);
  return opts;
}

export function render(oldRender) {
  fetch('/api/routes')
    .then((res) => res.json())
    .then((routesConfig) => {
      console.log('routesConfig', routesConfig);
      extraRoutes = routesConfig.map((item) => {
        let { path, component } = item;
        component = require('./' + component).default;
        console.log('component', component);
        return { path, component };
      });
    })
    .then(() => {
      // oldRender会调用modifyClientRenderOpts
      oldRender();
    });
}
