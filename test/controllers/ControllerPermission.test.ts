import app from "../../src/app"
import request, { Response } from "supertest"

describe("Testando o controlador do controllerPermission" , ()=> {

    
    it("Cadastrando objeto permissao sem relacionamento e data vazia" , async () => {

        const response: Response = await request(app).post("/permission/")
        .send(
            {
                id: 1,
                name: "suporte",
                users: [],
                deletedAt: ""
            }
        );

        expect(response.status).toBe(400);
    })
})