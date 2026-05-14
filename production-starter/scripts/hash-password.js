#!/usr/bin/env node
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { hashPassword } from "../src/security/passwords.js";

async function readPassword() {
  const fromArg = process.argv.slice(2).join(" ").trim();
  if (fromArg) return fromArg;

  const rl = readline.createInterface({ input, output });
  const password = await rl.question("Admin password to hash: ");
  rl.close();
  return password.trim();
}

const password = await readPassword();

if (!password) {
  console.error("Password is required.");
  process.exit(1);
}

console.log(hashPassword(password));
