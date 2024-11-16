"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1731191350893 = void 0;
class Migrations1731191350893 {
    constructor() {
        this.name = 'Migrations1731191350893';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "is_blocked" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'superadmin')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_blocked"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }
}
exports.Migrations1731191350893 = Migrations1731191350893;
//# sourceMappingURL=1731191350893-migrations.js.map