import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const description =
    "A simple login form with email and password. The submit button says 'Sign in'.";

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [login] = useMutation(LOGIN_MUTATION);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Email and password are required.");
            return;
        }

        try {
            const { data } = await login({
                variables: { email: email, password: password },
            });

            if (data && data.login) {
                localStorage.setItem("access_token", data.login.access_token);
                localStorage.setItem("refresh_token", data.login.refresh_token);

                navigate("/my-info/time-off");
            } else {
                setErrorMessage("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error: ", error);
            setErrorMessage("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email and password below to login to your
                        account.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full"
                            type="submit">
                            Sign in
                        </Button>
                    </CardFooter>
                </form>
                {errorMessage && (
                    <p className="text-red-500 text-center m-4">
                        {errorMessage}
                    </p>
                )}
            </Card>
        </div>
    );
};
