

export class mediaLibraryPage{

    //function for right click on any image by using the name of the image
    provideRightClickOn(pictureName){
        cy.contains(pictureName).rightclick()
    }
    //function for choosing the options from the popup by using the name of the option
    clickListOption(optionFromList){
        cy.get('[data-test="popover"]').contains(optionFromList).click()

    }
    //function for verifying the text value from the input text holder of the image
    verifyText(text){
        cy.get('[data-test="manage-top-bar"]').find('input').should('have.value',text)

    }

}
//instance of the class
export const onMediaLibraryPage = new mediaLibraryPage()