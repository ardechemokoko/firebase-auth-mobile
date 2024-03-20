import {AUTH_USER} from "../Constant";

//inscripotion
export const actionSignup = (email, password) => {
    return async (dispatch) => {
        try {
            // Requête HTTP
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKBrTPz9-JB3GFhjh8_DjaEJXIlbQ0vQc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            });

            // Vérification de la réponse
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message);
            }
            const dataObj = await response.json();
            // Vous pouvez ajouter des actions Redux ici si nécessaire
            // dispatch({ type: 'SIGNUP_SUCCESS', payload: dataObj });
            return dataObj; // Retourner les données si nécessaire
        } catch (error) {
            throw new Error('Une erreur est survenue lors de votre inscription : ' + error.message);
        }
    };
};



export const actionSignin = (email, password) => {
    return async (dispatch) => {
        try {
            // Requête HTTP
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKBrTPz9-JB3GFhjh8_DjaEJXIlbQ0vQc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            });

            // Vérification de la réponse
            if (!response.ok) {
                // Gestion des erreurs
                const errorData = await response.json();
                throw new Error(errorData.error.message);
            }

            // Récupération des données
            const dataObj = await response.json();
            // Vous pouvez ajouter des actions Redux ici si nécessaire
            // dispatch({ type: 'SIGNIN_SUCCESS', payload: dataObj });

            return dataObj; // Retourner les données si nécessaire
        } catch (error) {
            throw new Error('Une erreur est survenue lors de votre connexion : ' + error.message);
        }
    };
};




//inscription


//auth action