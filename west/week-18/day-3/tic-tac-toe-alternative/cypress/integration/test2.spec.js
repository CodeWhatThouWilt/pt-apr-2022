// Phase 2: Tracking Clicks
describe("Phase 2: Tracking Clicks", function () {

    before(function () {
        cy.visit("public/index.html");
    });

    describe("Placing Symbols", function () {

        it("The first click places an 'X' in that cell", function () {
            cy.get("#square-0").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
        });

        it("The next click places an 'O' in that cell", function () {
            cy.get("#square-3").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
        });
    });

    describe("Taking Turns", function () {

        it("The X and O take turns appropriately with each click", function () {
            cy.get("#square-2").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");

            cy.get("#square-8").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
        });

        it("Clicking a cell that already has a symbol does nothing", function () {
            cy.get("#square-3").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");

            cy.get("#square-0").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
        });

        it("Clicking a cell that already has a symbol does not change next player symbol", function () {
            cy.get("#square-2").click()
            cy.get("#square-3").click()
            cy.get("#square-4").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
            cy.get("#square-4").click()
            cy.get("#square-5").click().children()
                .should("have.attr", "src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
        });

        it("A cell that has not been clicked remains empty", function () {
            cy.get("#square-1 img")
                .should("not.exist");
            cy.get("#square-6 img")
                .should("not.exist");
            cy.get("#square-7 img")
                .should("not.exist");
        });
    });
});