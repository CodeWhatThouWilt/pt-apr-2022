// Phase 1: UI meets the minimum specs
describe("Phase 1: The UI HTML elements meet the minimum specs", function () {

    before(function () {
        cy.visit("public/index.html");
    });

    describe("Game Board", function () {

        it("The game board has 9 cells with the correct ids", function () {

                cy.get("#square-0").should("exist")
                cy.get("#square-1").should("exist")
                cy.get("#square-2").should("exist")
                cy.get("#square-3").should("exist")
                cy.get("#square-4").should("exist")
                cy.get("#square-5").should("exist")
                cy.get("#square-6").should("exist")
                cy.get("#square-7").should("exist")
                cy.get("#square-8").should("exist")
        });
    });

    describe("Buttons", function () {

        it("The buttons have the correct text", function () {
            cy.get("button").contains("New Game")
                .should("exist");
            cy.get("button").contains("Give Up")
                .should("exist");
        });
    });
});