

export class mediaLibraryPage{

    provideRightClickOn(pictureName){
        cy.contains(pictureName).rightclick()
    }

    clickListOption(optionFromList){
        cy.get('[data-test="popover"]').contains(optionFromList).click()

    }
    verifyText(text){
        cy.get('[data-test="manage-top-bar"]').find('input').should('have.value',text)
    }

}
//instance of the class
export const onMediaLibraryPage = new mediaLibraryPage()