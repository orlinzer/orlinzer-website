import { readFileSync, writeFileSync } from "fs";

readFileSync('/data/users.json');

writeFileSync('/data/users.json', JSON.stringify([], null, 2));