// Phase 7: Saving Game State
describe("Phase 7: Saving Game State", function () {

    describe("Game state is persisted", function () {

        it("Game state is persisted on refresh for game in progress", function () {
            cy.playGame(0,1,2);
            cy.reload();

            cy.get("#square-0").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-1").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-2").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
        });

        it("Game state is persisted on refresh for won game", function () {
            cy.playGame(0,1,4,5,8)
            cy.reload()

            cy.get("#square-0").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-1").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-4").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-5").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-8").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");

            cy.get("body").contains("Winner: X")
                .should("exist")
        });

        it("Game state is persisted on refresh for tied game", function () {
            cy.playGame(0,1,2,3,5,4,7,8,6)
            cy.reload()

            cy.get("#square-0").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-1").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-2").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-3").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-4").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-5").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-6").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-7").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-8").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");

            cy.get("body").contains("Winner: None")
                .should("exist")
        });

        it("Game state is persisted after a player gives up", function () {
            cy.playGame(0,1,2);
            cy.get("button").contains("Give Up").click();
            cy.playGame(0,1,2);

            cy.get("#square-0").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-1").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
            cy.get("#square-2").children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");

            cy.get("body").contains("Winner: X")
                .should("exist")
        });

        it("Game state is reset when clicking New Game button", function () {
            cy.get("button").contains("New Game").click()

            cy.get("#square-0 img")
                .should("not.exist");
            cy.get("#square-1 img")
                .should("not.exist");
            cy.get("#square-4 img")
                .should("not.exist");
            cy.get("#square-5 img")
                .should("not.exist");
            cy.get("#square-8 img")
                .should("not.exist");

            cy.get("body").contains("Winner: X")
                .should("not.exist")
        });
    });
});