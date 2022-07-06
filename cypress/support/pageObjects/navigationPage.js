

//class for navigation to each page
export class navigationPage{

    mediaLibraryPage(){
        //selectGroupMenuItem('Media Library')
        cy.contains('Media Library').click()
    }

}

//instance of the class
export const navigateTo = new navigationPage()