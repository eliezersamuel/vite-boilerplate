// src/test/setupTests.ts
import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";

// Inicia o MSW em modo Node (para testes)
afterEach(() => {
    vi.clearAllMocks();
});
