//state = null <--- esto es como asignar un default si es undefined
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        //si se llama de otra accion, retorna el mismo state que tenia antes
        default:
            return state;
    }
};
