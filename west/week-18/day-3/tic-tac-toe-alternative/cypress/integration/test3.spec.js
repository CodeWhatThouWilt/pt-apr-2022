// Phase 3: Determining Game Status
describe("Phase 3: Determining Game Status", function () {

    before(function () {
        cy.visit("public/index.html");
    });

    describe("Heading behaves as expected while game is in play", function () {

        it("The heading is empty at the start of a game", function () {
            cy.get("body").contains("Winner: None")
                .should("not.exist");
            cy.get("body").contains("Winner: O")
                .should("not.exist");
            cy.get("body").contains("Winner: X")
                .should("not.exist");
        });

        it("The heading is empty while game is still in play", function () {
            cy.playGame(0,1,2,3)
            cy.get("body").contains("Winner: None")
                .should("not.exist");
            cy.get("body").contains("Winner: O")
                .should("not.exist");
            cy.get("body").contains("Winner: X")
                .should("not.exist");
        });
    });

    describe("Heading behaves as expected when there is a tie", function () {

        it("If there is no win and board is full, then the game is a tie", function () {
            cy.playGame(0,1,2,3,5,4,7,8,6)
            cy.get("body").contains("Winner: None")
                .should("exist")
        });
    });

    describe("Heading shows a win with 3 in any row, column, or diagonal", function () {

        it("If a player has any three in a row, then that player wins", function () {
            cy.playGame(0,3,1,4,2)
            cy.get("body").contains("Winner: X")
                .should("exist")
            cy.clearLocalStorage()

            cy.playGame(3,0,4,1,5)
            cy.get("body").contains("Winner: X")
                .should("exist")
            cy.clearLocalStorage()

            cy.playGame(0,6,1,7,5,8)
            cy.get("body").contains("Winner: O")
                .should("exist")
        });

        it("If a player has any three in a column, then that player wins", function () {
            cy.playGame(0,1,3,2,6)
            cy.get("body").contains("Winner: X")
                .should("exist")
            cy.clearLocalStorage()

            cy.playGame(1,0,4,5,7)
            cy.get("body").contains("Winner: X")
                .should("exist")
            cy.clearLocalStorage()

            cy.playGame(0,2,1,5,3,8)
            cy.get("body").contains("Winner: O")
                .should("exist")
        });

        it("If a player has either of the diagonals, then that player wins", function () {
            cy.playGame(0,1,4,2,8)
            cy.get("body").contains("Winner: X")
                .should("exist")
            cy.clearLocalStorage()

            cy.playGame(1,6,8,4,3,2)
            cy.get("body").contains("Winner: O")
                .should("exist")
        });
    });

    describe("Board behaves as expected after a win or tie", function () {

        it("After win, empty squares in the grid no longer react to clicks", function () {
            cy.playGame(0,3,1,4,2,5,6,7,8)
            cy.get("#square-5 img")
                .should("not.exist");
            cy.get("#square-6 img")
                .should("not.exist");
            cy.get("#square-7 img")
                .should("not.exist");
            cy.get("#square-8 img")
                .should("not.exist");
            cy.get("body").contains("Winner: X")
                .should("exist")
        });

        it("After tie, empty squares in the grid no longer react to clicks", function () {
            cy.playGame(0,1,2,3,5,4,7,8,5,6,7,8)
            cy.get("body").contains("Winner: None")
                .should("exist")
        });
    });
});