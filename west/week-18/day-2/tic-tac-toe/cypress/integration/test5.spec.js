// Phase 5: Creating a New Game
describe("Phase 5: Creating a New Game", function () {

    before(function () {
        cy.visit("public/index.html");
    });

    describe("New Game Button", function () {

        it("New Game button is disabled if game is not won or tied", function () {
            cy.get("button").contains("New Game")
                .should("be.disabled")

            cy.playGame(0,3,1)
            cy.get("button").contains("New Game")
                .should("be.disabled")
        });

        it("New Game button is enabled if game is won or tied", function () {
            cy.playGame(0,1,4,2,8)
            cy.get("button").contains("New Game")
                .should("not.be.disabled")
            cy.clearLocalStorage()

            cy.playGame(0,1,2,3,5,4,7,8,6)
            cy.get("button").contains("New Game")
                .should("not.be.disabled")
        });
    });

    describe("Clicking New Game Button", function () {

        beforeEach(function () {
            cy.playGame(0,1,2,3,5,4,7,8,6);
            cy.get("button").contains("New Game").click();
        });

        it("Clears the header and game status", function () {
            cy.get("body").contains("Winner: None")
                .should("not.exist")
        });

        it("Clears the board", function () {
            cy.get("#square-0 img")
                .should("not.exist");
            cy.get("#square-1 img")
                .should("not.exist");
            cy.get("#square-2 img")
                .should("not.exist");
            cy.get("#square-3 img")
                .should("not.exist");
            cy.get("#square-4 img")
                .should("not.exist");
            cy.get("#square-5 img")
                .should("not.exist");
            cy.get("#square-6 img")
                .should("not.exist");
            cy.get("#square-7 img")
                .should("not.exist");
            cy.get("#square-8 img")
                .should("not.exist");
        });

        it("Starts new game with player X", function () {
            cy.get("#square-0").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");

            cy.playGame(0,3,2,4,1);
            cy.get("button").contains("New Game").click();

            cy.get("#square-0").click().children()
            .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
        });

        it("Disables the New Game button", function () {
            cy.get("button").contains("New Game")
                .should("be.disabled")
        });
    });
});