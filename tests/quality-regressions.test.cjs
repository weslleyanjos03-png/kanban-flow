const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

test('mantém a mesma chave de armazenamento e evita atualizar estado antes de salvar', () => {
  assert.match(html, /var STORAGE_KEY = 'kanban_flow_public_v1'/);
  assert.match(html, /function save\(nextState\)/);
  assert.match(html, /localStorage\.setItem\(data\.STORAGE_KEY, JSON\.stringify\(nextState\)\);\s*state = nextState;/);
  assert.match(html, /function changeState\(change\)/);
});

test('não sobrescreve automaticamente dados locais ilegíveis', () => {
  assert.match(html, /storageLocked = true/);
  assert.match(html, /unreadableBackup = raw/);
  assert.match(html, /if \(storageLocked\)/);
  assert.match(html, /kanban-flow-dados-brutos-/);
});

test('inclui onboarding e indicação de navegação em telas menores', () => {
  assert.match(html, /id="quickstart"/);
  assert.match(html, /id="board-hint"/);
  assert.match(html, /Deslize horizontalmente/);
});

test('documentos de pesquisa deixam explícito que feedback ainda não foi coletado', () => {
  const validation = fs.readFileSync(path.join(__dirname, '..', 'docs', 'VALIDACAO-COM-USUARIOS.md'), 'utf8');
  assert.match(validation, /5 a 10 pessoas/);
  assert.match(validation, /N[oã]o significa que participantes reais j[aá] foram entrevistados/);
});
