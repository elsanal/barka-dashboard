import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {AuthPage,ErrorComponent,ThemedLayoutV2,ThemedSiderV2,useNotificationProvider} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {CatchAllNavigate,DocumentTitleHandler,NavigateToResource,UnsavedChangesNotifier} from "@refinedev/react-router";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import authProvider from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {CategoryCreate,CategoryEdit,CategoryList,CategoryShow} from "./pages/categories";
import {ProductsCreate,ProductsEdit,ProductsList,ProductsShow,} from "./pages/products";
import { OrdersCreate, OrdersEdit, OrdersList, OrdersShow } from "./pages/orders";  
import { UsersCreate, UsersEdit, UsersList, UsersShow } from "./pages/users";
import { StatusCreate, StatusEdit, StatusList, StatusShow } from "./pages/statuses";
import { Dashboard } from "./pages/dashboard";


import { supabaseClient } from "./utility";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={useNotificationProvider}
                resources={[
                  {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "statuses",
                    list: "/statuses",
                    create: "/statuses/create",
                    edit: "/statuses/edit/:id",
                    show: "/statuses/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                   {
                    name: "products",
                    list: "/products",
                    create: "/products/create",
                    edit: "/products/edit/:id",
                    show: "/products/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "orders",
                    list: "/orders",
                    create: "/orders/create",
                    edit: "/orders/edit/:id",
                    show: "/orders/show/:id",
                    meta: {
                      canDelete: true,
                  }},
                  {
                    name: "users",
                    list: "/users",
                    create: "/users/create",
                    edit: "/users/edit/:id",
                    show: "/users/show/:id",
                    meta: {
                      canDelete: true,    
                  }}
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "MFFklv-JBAlMt-SDa7HJ",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={Header}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    />
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="/statuses">
                      <Route index element={<StatusList />} />
                      <Route path="create" element={<StatusCreate />} />
                      <Route path="edit/:id" element={<StatusEdit />} />
                      <Route path="show/:id" element={<StatusShow />} />
                    </Route>
                    <Route path="/products">
                      <Route index element={<ProductsList />} />
                      <Route path="create" element={<ProductsCreate />} />
                      <Route path="edit/:id" element={<ProductsEdit />} />
                      <Route path="show/:id" element={<ProductsShow />} />
                    </Route>
                    <Route path="/orders">
                      <Route index element={<OrdersList />} />
                      <Route path="create" element={<OrdersCreate />} />
                      <Route path="edit/:id" element={<OrdersEdit />} />
                      <Route path="show/:id" element={<OrdersShow />} />
                    </Route>
                    <Route path="/users">
                      <Route index element={<UsersList />} />
                      <Route path="create" element={<UsersCreate />} />
                      <Route path="edit/:id" element={<UsersEdit />} />
                      <Route path="show/:id" element={<UsersShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route
                      path="/login"
                      element={
                        <AuthPage
                          type="login"
                          formProps={{
                            initialValues: {
                              email: "info@refine.dev",
                              password: "refine-supabase",
                            },
                          }}
                        />
                      }
                    />
                    <Route
                      path="/register"
                      element={<AuthPage type="register" />}
                    />
                    <Route
                      path="/forgot-password"
                      element={<AuthPage type="forgotPassword" />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
                /*DashboardPage={<Dashboard />}*/
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
