import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { dynamicCellStyle } from './helpers/helpers';

const classes = {
    assassin: { type: 'scout' },
    beastlord: { type: 'scout' },
    berserker: { type: 'fighter' },
    brigand: { type: 'scout' },
    bruiser: { type: 'fighter' },
    channeler: { type: 'priest' },
    coercer: { type: 'mage' },
    conjuror: { type: 'mage' },
    defiler: { type: 'priest' },
    dirge: { type: 'scout' },
    fury: { type: 'priest' },
    guardian: { type: 'fighter' },
    illusionist: { type: 'mage' },
    inquisitor: { type: 'priest' },
    monk: { type: 'fighter' },
    mystic: { type: 'priest' },
    necromancer: { type: 'mage' },
    paladin: { type: 'fighter' },
    ranger: { type: 'scout' },
    shadowknight: { type: 'fighter' },
    swashbuckler: { type: 'scout' },
    templar: { type: 'priest' },
    troubador: { type: 'scout' },
    warden: { type: 'priest' },
    warlock: { type: 'mage' },
    wizard: { type: 'mage' },
};

const attributes = {
    critbonus: {
        displayname: 'Crit Bonus',
        type: 'modifyproperty',
        value: 0.5,
        color: 'blue',
    },
    all: {
        displayname: 'Ability Mod',
        type: 'normalizedmod',
        value: 19,
        color: 'blue',
    },
    intelligence: {
        displayname: 'Primary Attributes',
        type: 'attribute',
        value: 39,
        color: 'green',
    },
    critchance: {
        displayname: 'Crit Chance',
        type: 'modifyproperty',
        value: 1.2,
        color: 'blue',
    },
    basemodifier: {
        displayname: 'Potency',
        type: 'modifyproperty',
        value: 2.5,
        color: 'blue',
    },
    combatskills: {
        displayname: 'Combat Skills',
        type: 'skill',
        value: 12,
        color: 'green',
    },
    stamina: {
        displayname: 'Stamina',
        type: 'attribute',
        value: 39,
        color: 'green',
    },
    strength: {
        displayname: 'Primary Attributes',
        type: 'attribute',
        value: 31,
        color: 'green',
    },
    wisdom: {
        displayname: 'Primary Attributes',
        type: 'attribute',
        value: 31,
        color: 'green',
    },
    combathpregenppt: {
        displayname: 'Combat Health Regen',
        type: 'modifyproperty',
        value: 2,
        color: 'green',
    },
    doubleattackchance: {
        displayname: 'Multi Attack',
        type: 'modifyproperty',
        value: 5.5,
        color: 'blue',
    },
    agility: {
        displayname: 'Primary Attributes',
        type: 'attribute',
        value: 31,
        color: 'green',
    },
    spelltimecastpct: {
        displayname: 'Casting Speed',
        type: 'modifyproperty',
        value: 2.7,
        color: 'blue',
    },
    noxious: {
        displayname: 'noxious',
        type: 'ac',
        value: 429,
        color: 'green',
    },
    hategainmod: {
        displayname: 'Hate Gain',
        type: 'modifyproperty',
        value: -7.9,
        color: 'blue',
    },
    dps: {
        displayname: 'DPS',
        type: 'modifyproperty',
        value: 9.6,
        color: 'blue',
    },
    flurry: {
        displayname: 'Flurry',
        type: 'modifyproperty',
        value: 2.2,
        color: 'blue',
    },
    maxhpperc: {
        displayname: 'Max Health',
        type: 'modifyproperty',
        value: 4.7,
        color: 'blue',
    },
    aeautoattackchance: {
        displayname: 'AE Auto',
        type: 'modifyproperty',
        value: 0.8,
        color: 'blue',
    },
    elemental: {
        displayname: 'elemental',
        type: 'ac',
        value: 402,
        color: 'green',
    },
    attackspeed: {
        displayname: 'Haste',
        type: 'modifyproperty',
        value: 2.4,
        color: 'blue',
    },
    strikethrough: {
        displayname: 'Strikethrough',
        type: 'modifyproperty',
        value: 6.7,
        color: 'blue',
    },
    arcane: {
        displayname: 'arcane',
        type: 'ac',
        value: 420,
        color: 'green',
    },
    combatmpregenppt: {
        displayname: 'Combat Power Regen',
        type: 'modifyproperty',
        value: 2,
        color: 'blue',
    },
    armormitigationincrease: {
        displayname: 'Mitigation Increase',
        type: 'modifyproperty',
        value: 3.5,
        color: 'blue',
    },
    spelltimereusepct: {
        displayname: 'Reuse Speed',
        type: 'modifyproperty',
        value: 3,
        color: 'blue',
    },
    blockchance: {
        displayname: 'Block',
        type: 'modifyproperty',
        value: 1.8,
        color: 'blue',
    },
    piercing: {
        displayname: 'piercing',
        type: 'hpdamage',
        value: 14,
        color: 'green',
    },
    heat: {
        displayname: 'heat',
        type: 'hpdamage',
        value: 14,
        color: 'green',
    },
    mana: {
        displayname: 'mana',
        type: 'maxpool',
        value: 165,
        color: 'green',
    },
    health: {
        displayname: 'health',
        type: 'maxpool',
        value: 127,
        color: 'green',
    },
    ripostechance: {
        displayname: 'Extra Riposte',
        type: 'modifyproperty',
        value: 2,
        color: 'blue',
    },
    accuracy: {
        displayname: 'Accuracy',
        type: 'modifyproperty',
        value: 3,
        color: 'blue',
    },
    cold: {
        displayname: 'cold',
        type: 'hpdamage',
        value: 14,
        color: 'green',
    },
    slashing: {
        displayname: 'slashing',
        type: 'hpdamage',
        value: 12,
        color: 'green',
    },
    abilitydoubleattackchance: {
        displayname: 'Ability Doublecast',
        type: 'modifyproperty',
        value: 2.2,
        color: 'blue',
    },
    crushing: {
        displayname: 'crushing',
        type: 'hpdamage',
        value: 14,
        color: 'green',
    },
    poison: {
        displayname: 'poison',
        type: 'hpdamage',
        value: 12,
        color: 'green',
    },
    divine: {
        displayname: 'divine',
        type: 'hpdamage',
        value: 12,
        color: 'green',
    },
    physical: {
        displayname: 'physical',
        type: 'ac',
        value: 67,
        color: 'green',
    },
    disease: {
        displayname: 'disease',
        type: 'hpdamage',
        value: 12,
        color: 'green',
    },
    fervor: {
        displayname: 'Fervor',
        type: 'modifyproperty',
        value: 2.2,
        color: 'blue',
    },
    itemhpregenppt: {
        displayname: 'Combat Health Regen',
        type: 'modifyproperty',
        value: 10,
        color: 'blue',
    },
    magic: {
        displayname: 'magic',
        type: 'hpdamage',
        value: 12,
        color: 'green',
    },
    damage: {
        displayname: 'Damage',
        type: 'normalizedmod',
        value: 240,
        color: 'blue',
    },
    harvestingskills: {
        displayname: 'Harvesting Skills',
        type: 'skill',
        value: 15,
        color: 'green',
    },
    craftingskills: {
        displayname: 'Crafting Skills',
        type: 'skill',
        value: 12,
        color: 'green',
    },
};

export default forwardRef((props, ref) => {
    const [data, setData] = useState(
        props.api.getDisplayedRowAtIndex(props.rowIndex).data
    );

    useImperativeHandle(ref, () => {
        return {
            getReactContainerClasses() {
                return ['custom-tooltip-container'];
            },
        };
    });

    const capitalize = (s) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const renderWeaponStatsOrOther = () => {
        if (data?.typeinfo?.name === 'weapon') {
            return (
                <div>
                    <div style={{ fontWeight: '700' }}>
                        {capitalize(data?.requiredskill?.text)}
                    </div>
                    <div>
                        {data.typeinfo.wieldstyle}{' '}
                        {capitalize(data.typeinfo.skill)}
                    </div>
                    <div className='row'>
                        <span className='col-4'>Damage</span>
                        <span className='col-4'>
                            {data.typeinfo.mindamage} -{' '}
                            {data.typeinfo.maxdamage}
                        </span>
                        <span className='col-4'>
                            (
                            {Math.round(data.typeinfo.damagerating * 100) / 100}{' '}
                            Rating)
                        </span>
                    </div>
                    <div className='row'>
                        <span className='col-4'>Delay</span>
                        <span className='col-4'>
                            {' '}
                            {data.typeinfo.delay.toFixed(1)} seconds
                        </span>
                    </div>
                    <div className='row'>
                        <span className='col-4'>Level</span>
                        <span
                            className='col-4'
                            style={{ color: 'rgb(61, 237, 61)' }}
                        >
                            {data.leveltouse}
                        </span>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className='row'>
                        <div className='col-2'>
                            {data.slot_list.length > 1 ? 'Slots' : 'Slot'}
                        </div>
                        <div className='col-2'>
                            {data.slot_list.map((slot) => slot.name).join(', ')}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>Level</div>
                        <div
                            className='col-2'
                            style={{ color: 'rgb(61, 237, 61)' }}
                        >
                            {data.leveltouse}
                        </div>
                    </div>
                </div>
            );
        }
    };

    // const renderAllClass = (counts) => {

    // }

    const renderClasses = () => {
        const counts = { fighters: 0, priests: 0, mages: 0, scouts: 0 };

        const classnames = Object.keys(data.typeinfo.classes);

        classnames.forEach((classname) => {
            console.log(classes);
            if (classes[classname]?.type === 'fighter') {
                counts.fighters += 1;
            } else if (classes[classname]?.type === 'priest') {
                counts.priests += 1;
            } else if (classes[classname]?.type === 'mage') {
                counts.mages += 1;
            } else if (classes[classname]?.type === 'scout') {
                counts.scouts += 1;
            }
        });

        const list = [];

        if (counts.fighters === 6) {
            list.push('All Fighters');
        }
        if (counts.priests === 7) {
            list.push('All Priests');
        }
        if (counts.mages === 6) {
            list.push('All Mages');
        }
        console.log(counts.scouts);
        if (counts.scouts === 7) {
            list.push('All Scouts');
        }

        const sublist = [];

        classnames.forEach((classname) => {
            if (
                classes[classname]?.type === 'fighter' &&
                counts.fighters != 6
            ) {
                sublist.push(data.typeinfo.classes[classname].displayname);
            }
            if (classes[classname]?.type === 'priest' && counts.priests != 7) {
                sublist.push(data.typeinfo.classes[classname].displayname);
            }
            if (classes[classname]?.type === 'mage' && counts.mages != 6) {
                sublist.push(data.typeinfo.classes[classname].displayname);
            }
            if (classes[classname]?.type === 'scout' && counts.scouts != 7) {
                sublist.push(data.typeinfo.classes[classname].displayname);
            }
        });

        sublist.sort();

        return (
            <div className='mt-2' style={{ color: 'rgb(61, 237, 61)' }}>
                {[...list, ...sublist].join(', ')}
            </div>
        );
    };

    const renderEffect = () => {
        let noIndentCount = 0;

        if (data?.effect_list?.length > 0) {
            return (
                <div>
                    <div
                        className='mt-3'
                        style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: 'rgb(218, 220, 116)',
                        }}
                    >
                        Effects:
                    </div>
                    {data.effect_list.map((effect, i) => {
                        let idx;
                        if (effect.indentation === 0) {
                            idx = noIndentCount;
                            noIndentCount += 1;
                        }
                        return (
                            <div key={`effect-${i}`}>
                                {effect.indentation === 0 ? (
                                    <div>
                                        <div
                                            className={`${i != 0 && 'mt-2'}`}
                                            style={dynamicCellStyle({
                                                data: { tier: data.tier },
                                            })}
                                        >
                                            {data.adornment_list[idx].name}
                                        </div>
                                        <div>{effect.description}</div>
                                    </div>
                                ) : (
                                    <div className='d-flex'>
                                        {effect.indentation > 0 && (
                                            <div
                                                className='d-flex justify-content-end align-items-baseline'
                                                style={{
                                                    minWidth:
                                                        effect.indentation *
                                                            20 +
                                                        'px',
                                                }}
                                            >
                                                {/* <div
                                                    style={{
                                                        paddingLeft:
                                                            effect.indentation *
                                                                20 +
                                                            'px',
                                                        2,
                                                    }}
                                                > */}
                                                <div
                                                    style={{
                                                        minWidth: '4px',
                                                        minHeight: '4px',
                                                        marginTop: '8px',
                                                        borderRadius: '100%',
                                                        marginRight: '5px',
                                                        backgroundColor:
                                                            '#efea77',
                                                        display: 'inline-block',
                                                    }}
                                                ></div>
                                                {/* </div> */}
                                            </div>
                                        )}
                                        <span>{effect.description}</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    console.log(data);

    return (
        <div style={{ minHeight: '1000px' }}>
            <div className='custom-tooltip-container'>
                <div className='custom-tooltip'>
                    <div className='custom-tooltip-inner'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <div style={{ fontWeight: 700 }}>
                                    {data.displayname}
                                </div>
                                <div
                                    style={dynamicCellStyle({
                                        data: { tier: data.tier },
                                    })}
                                >
                                    {data.tier}
                                </div>
                            </div>
                            <div className='item-icon'>
                                <img
                                    src={`http://census.daybreakgames.com/img/eq2/icons/${data.iconid}/item/`}
                                />
                            </div>
                        </div>
                        {Object.keys(data.modifiers).length > 1 && (
                            <div className='row mt-2'>
                                {Object.keys(data.modifiers).map(
                                    (attribute) => {
                                        // debugger;
                                        if (
                                            attributes?.[attribute]?.color ===
                                            'green'
                                        ) {
                                            return (
                                                <div className='col-6'>
                                                    <div
                                                        style={{
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            color:
                                                                'rgb(61, 237, 61)',
                                                            display:
                                                                'inline-block',
                                                        }}
                                                    >
                                                        {
                                                            data.modifiers[
                                                                attribute
                                                            ].value
                                                        }{' '}
                                                        {
                                                            attributes[
                                                                attribute
                                                            ].displayname
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        }
                                    }
                                )}
                            </div>
                        )}
                        {Object.keys(data.modifiers).length > 1 && (
                            <div className='row mt-2 mb-3'>
                                {Object.keys(data.modifiers).map(
                                    (attribute) => {
                                        // debugger;
                                        if (
                                            attributes?.[attribute]?.color ===
                                            'blue'
                                        ) {
                                            return (
                                                <div className='col-6'>
                                                    <div
                                                        style={{
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            color:
                                                                'rgb(96, 216, 236)',
                                                            display:
                                                                'inline-block',
                                                        }}
                                                    >
                                                        {
                                                            data.modifiers[
                                                                attribute
                                                            ].value
                                                        }{' '}
                                                        {
                                                            attributes[
                                                                attribute
                                                            ].displayname
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        }
                                    }
                                )}
                            </div>
                        )}
                        {renderWeaponStatsOrOther()}
                        {renderClasses()}
                        {renderEffect()}
                    </div>
                </div>
            </div>
        </div>
    );
});
