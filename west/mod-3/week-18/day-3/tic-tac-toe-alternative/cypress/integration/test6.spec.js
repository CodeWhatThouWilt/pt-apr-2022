// Phase 6: Giving Up
describe("Phase 6: Giving Up", function () {

    before(function () {
        cy.visit("public/index.html");
    });

    describe("Give Up Button", function () {

        it("Give Up button is enabled during game play", function () {
            cy.get("button").contains("New Game")
                .should("be.disabled")

            cy.get("button").contains("Give Up")
                .should("not.be.disabled")

            cy.playGame(0,1,4)
            cy.get("button").contains("Give Up")
                .should("not.be.disabled")
        });
    });

    describe("Clicking Give Up Button During Game", function () {

        beforeEach(function () {
            cy.playGame(0,1,2);
            cy.get("button").contains("Give Up").click();
        });


        it("Show the winner status as won by the other player", function () {

            cy.get("body").contains("Winner: X")
                .should("exist")
            cy.clearLocalStorage()

            cy.playGame(0,1);
            cy.get("button").contains("Give Up").click();
            cy.get("body").contains("Winner: O")
                .should("exist")
        });

        it("Disables the Give Up Button", function () {
            cy.get("button").contains("Give Up")
                .should("be.disabled")
        });

        it("Enables the New Game button", function () {
            cy.get("button").contains("New Game")
                .should("not.be.disabled")
        });
    });


    describe("Give Up Button After Win or Tie", function () {

        it("Disables the Give Up Button after tie", function () {
            cy.playGame(0,1,2,3,5,4,7,8,6)
            cy.get("button").contains("Give Up")
                .should("be.disabled")
        });

        it("Disables the Give Up Button after win", function () {
            cy.playGame(0,3,1,4,2)
            cy.get("button").contains("Give Up")
                .should("be.disabled")
        });


    });
});