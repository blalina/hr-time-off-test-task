import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginForm } from "./pages/Login/LoginForm";
import { MyInfo } from "./pages/MyInfo/MyInfo";
import { client } from "./lib/apolloClient";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";

export function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route
                        path="/"
                        element={<LoginForm />}
                    />
                    <Route
                        path="/login"
                        element={<LoginForm />}
                    />
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path="/my-info/time-off"
                            element={<MyInfo />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}
