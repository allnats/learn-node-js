import { readFileSync, writeFileSync } from "fs";
import { parse } from "path";

const data_buffer = readFileSync("json-sample.json")
const read_data = data_buffer.toString()
let parsed_json = JSON.parse(read_data)

parsed_json.name = "Johnny"
parsed_json.age = "32"

writeFileSync("json-sample.json", JSON.stringify(parsed_json))