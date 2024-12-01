import { z } from "zod";

// Définir un schéma Zod pour un utilisateur
export const userSchema = z.object({
    nom : z.string().min(3),
    prenom : z.string().min(3),
    age : z.number().positive()
});

// Exporter le type TypeScript généré
export type User = z.infer<typeof userSchema>;
