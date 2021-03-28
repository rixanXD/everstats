export const dynamicCellStyle = (params) => {
    // console.log(params);
    if (params.data.tier === 'MYTHICAL') {
        //mark police cells as red
        return {
            color: 'rgb(197, 141, 212)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(106 24 128) 0px 0px 4px, rgb(106 24 128) 0px 0px 4px;',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'FABLED') {
        return {
            color: 'rgb(233, 124, 135)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(130 28 37) 0px 0px 4px, rgb(130 28 37) 0px 0px 4px',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'MASTERCRAFTED FABLED') {
        return {
            color: 'rgb(233, 124, 135)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(130 28 37) 0px 0px 4px, rgb(130 28 37) 0px 0px 4px',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'LEGENDARY') {
        return {
            color: 'rgb(237, 183, 129)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(154 81 9) 0px 0px 4px, rgb(105 56 6) 0px 0px 4px',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'MASTERCRAFTED LEGENDARY') {
        return {
            color: 'rgb(237, 183, 129)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(154 81 9) 0px 0px 4px, rgb(105 56 6) 0px 0px 4px',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'TREASURED') {
        return {
            color: 'rgb(128, 198, 237)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(154 81 9) 0px 0px 4px, rgb(6 70 105) 0px 0px 4px',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'MASTERCRAFTED') {
        return {
            color: 'rgb(128, 198, 237)',
            textShadow:
                'rgb(0 0 0) -1px 0px 0px, rgb(0 0 0) 0px 1px 0px, rgb(0 0 0) 1px 0px 0px, rgb(0 0 0) 0px -1px 0px, rgb(154 81 9) 0px 0px 4px, rgb(6 70 105) 0px 0px 4px',
            fontWeight: 'bold',
        };
    } else if (params.data.tier === 'HANDCRAFTED') {
        return {
            color: 'rgb(175, 240, 131)',
            textShadow:
                'rgb(0 0 0) -1px 0px, rgb(0 0 0) 0px 1px, rgb(0 0 0) 1px 0px, rgb(0 0 0) 0px -1px, rgb(69 105 9) 0px 0px 5px, rgb(69 105 9) 0px 0px 5px, rgb(69 105 9) 0px 0px 5px',
        };
    } else if (params.data.tier === 'UNCOMMON') {
        return {
            color: 'rgb(175, 240, 131)',
            textShadow:
                'rgb(0 0 0) -1px 0px, rgb(0 0 0) 0px 1px, rgb(0 0 0) 1px 0px, rgb(0 0 0) 0px -1px, rgb(69 105 9) 0px 0px 5px, rgb(69 105 9) 0px 0px 5px, rgb(69 105 9) 0px 0px 5px',
        };
    }
    return null;
};
