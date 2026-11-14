# NEXUS MASTER adaptado para Alife Virtual

## Alterações realizadas
- O Master aceita teleporte e rotas com links `hop://www.alifevirtual.com:8002/Regiao/128/128/25`.
- A interface exibe links hop:// para as posições dos bots.
- Links antigos maps.secondlife.com permanecem aceitos para compatibilidade.
- O esquema PostgreSQL do NEXUS foi mantido; pode usar o mesmo SERVIDOR PostgreSQL do BotPanel Pro, preferencialmente em outro banco para evitar colisão da tabela `bots`. NÃO aponte ambos para o mesmo banco/schema sem migração.
- Nenhuma credencial real foi copiada.

## Importante: login dos bots
O ZIP original não contém o código do Agent. O Master chama `/start`, `/stop`, `/teleport`, etc. em um Agent externo. Portanto esta entrega NÃO comprova login funcional no Alife Virtual. Para conectar avatares, o Agent deve implementar o protocolo do NEXUS e utilizar a lógica de login OpenSim já testada no BotPanel Pro V4. Não configure o Master para apontar diretamente para a API do Pro: as APIs são incompatíveis.

## Instalação
1. Crie banco PostgreSQL dedicado ao NEXUS no mesmo servidor/instância do Pro, ou use schema isolado com alterações adicionais.
2. Configure as variáveis de ambiente conforme `.env.example`; mantenha a chave de criptografia anterior se reutilizar dados existentes.
3. Instale `npm install` e execute `npm start`.
4. Configure Agents NEXUS compatíveis e valide login/teleporte na grid antes de produção.

## Segurança
Defina ADMIN_PASSWORD e SESSION_SECRET fortes; não use os padrões do código. Faça backup do PostgreSQL antes de qualquer migração.
