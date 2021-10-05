import {MigrationInterface, QueryRunner} from "typeorm";

export class TeamFranchiseRelationships1633410171912 implements MigrationInterface {
    name = 'TeamFranchiseRelationships1633410171912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Batting" ADD CONSTRAINT "FK_4af183dce2ef81bb22d342aa71a" FOREIGN KEY ("teamsId") REFERENCES "Baseball"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Batting" ADD CONSTRAINT "FK_535ace179199cfbd50061e12134" FOREIGN KEY ("battingId") REFERENCES "Baseball"."Batting"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_BattingPost" ADD CONSTRAINT "FK_9de4abf5d75bde2bb644e944773" FOREIGN KEY ("teamsId") REFERENCES "Baseball"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_BattingPost" ADD CONSTRAINT "FK_b06916eb3082844b584c8c36948" FOREIGN KEY ("battingPostId") REFERENCES "Baseball"."BattingPost"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Pitching" ADD CONSTRAINT "FK_680fb699f609c52870a5a81948a" FOREIGN KEY ("teamsId") REFERENCES "Baseball"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Pitching" ADD CONSTRAINT "FK_901ecaafa4f00dc66393dfa9770" FOREIGN KEY ("pitchingId") REFERENCES "Baseball"."Pitching"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_PitchingPost" ADD CONSTRAINT "FK_afc34c180e12d8ffd01d88bd069" FOREIGN KEY ("teamsId") REFERENCES "Baseball"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_PitchingPost" ADD CONSTRAINT "FK_d49f96f2bb57e4f1f10d8383e63" FOREIGN KEY ("pitchingPostId") REFERENCES "Baseball"."PitchingPost"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Fielding" ADD CONSTRAINT "FK_eb7bcb8fcbc15aaeb12118b8144" FOREIGN KEY ("teamsId") REFERENCES "Baseball"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Fielding" ADD CONSTRAINT "FK_c5bba629cfa9de5c1059e9031f0" FOREIGN KEY ("fieldingId") REFERENCES "Baseball"."Fielding"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_FieldingPost" ADD CONSTRAINT "FK_afdfed1978cd8450866c25b3a7a" FOREIGN KEY ("teamsId") REFERENCES "Baseball"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_FieldingPost" ADD CONSTRAINT "FK_b37ae49366c3d30282e3eef7ff6" FOREIGN KEY ("fieldingPostId") REFERENCES "Baseball"."FieldingPost"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_FieldingPost" DROP CONSTRAINT "FK_b37ae49366c3d30282e3eef7ff6"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_FieldingPost" DROP CONSTRAINT "FK_afdfed1978cd8450866c25b3a7a"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Fielding" DROP CONSTRAINT "FK_c5bba629cfa9de5c1059e9031f0"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Fielding" DROP CONSTRAINT "FK_eb7bcb8fcbc15aaeb12118b8144"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_PitchingPost" DROP CONSTRAINT "FK_d49f96f2bb57e4f1f10d8383e63"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_PitchingPost" DROP CONSTRAINT "FK_afc34c180e12d8ffd01d88bd069"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Pitching" DROP CONSTRAINT "FK_901ecaafa4f00dc66393dfa9770"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Pitching" DROP CONSTRAINT "FK_680fb699f609c52870a5a81948a"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_BattingPost" DROP CONSTRAINT "FK_b06916eb3082844b584c8c36948"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_BattingPost" DROP CONSTRAINT "FK_9de4abf5d75bde2bb644e944773"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Batting" DROP CONSTRAINT "FK_535ace179199cfbd50061e12134"`);
        await queryRunner.query(`ALTER TABLE "Baseball"."Teams_Batting" DROP CONSTRAINT "FK_4af183dce2ef81bb22d342aa71a"`);
    }

}
