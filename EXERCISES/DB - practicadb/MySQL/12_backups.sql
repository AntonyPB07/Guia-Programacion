select user();
-- Backup completo de estructura + datos
mysqldump -u root -p practicadb > practicadb_full.sql

-- Backup solo esquema (estructura)
mysqldump -u root --no-data practicadb > practicadb_schema.sql