import { defaultName, greeting } from "../greeting";
import { test } from "rome";

test("Say Hello Fernando", (api) => {
	api.is(greeting({ name: "Fernando" }), "Hello Fernando");
});

test("Say Hello Default", (api) => {
	api.is(greeting(), `Hello ${defaultName}`);
});
