import fs from "fs";
import { faker } from "@faker-js/faker";
import path from "path";
import { fileURLToPath } from "url";

// Resolve o diretório do script atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createUsers() {
    return Array.from({ length: 100 })
        .fill(null)
        .map(() => ({
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            cpf: faker.string.numeric(11),
        }));
}

export function createRandomUser() {
    return {
        users: createUsers(),
    };
}

// Caminho para salvar no mesmo diretório do script
const filePath = path.join(__dirname, "db.json");

const data = createRandomUser();
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

console.log(`Arquivo db.json`);
