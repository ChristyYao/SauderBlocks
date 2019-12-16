const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { TextControl, PanelBody } = wp.components;
import { RichText } from '@wordpress/block-editor';
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.editor;

registerBlockType( 'ubc/marketing-button', {
    title: 'UBC Marketing Button',
    description: 'Description will go here',
    category: 'common',
    icon: 'book-alt',
    attributes: {
        buttonText: {
            type: 'array',
            source: 'children',
            selector: 'p'
        },
        buttonURL: {
            type: 'string',
            default: 'http://google.ca/'
        }
    },
    edit: ( { attributes, setAttributes, className, isSelected }) => {

        const updateFieldValue = ( val ) => {
            console.log([attributes, val]);
            setAttributes( { buttonText: val } );
        }
        // return <TextControl
        //     value={ attributes.buttonText }
        //     onChange={ updateFieldValue }
        //     className={ className }
        // />;
        return <RichText
            tagName="p"
            className={ className }
            onChange={ updateFieldValue }
            value={ attributes.buttonText }
        />
    },
    save: ( { attributes } ) => {

        // let savedButtonURL = attributes.buttonURL;

        // return (
        //     <div { savedButtonURL }>{ attributes.buttonText }</div>
        // );
        console.log( attributes );
        // return <TextControl
        //     value={ attributes.buttonText }
        // />;
        return <RichText.Content tagName="p" value={ attributes.buttonText } />;

    }
});

/**
 * Is the passed block name one which supports our custom field?
 *
 * @param {string} name The name of the block.
 */
function isValidBlockType( name ) {

    const validBlockTypes = [
        'ubc/marketing-button',
    ];

    return validBlockTypes.includes( name );

}// end isValidBlockType()

export const marketingButtonControls = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

        // If not a valid block type or not selected, bail early
        if( ! isValidBlockType( props.name ) || ! props.isSelected ) {
            return <BlockEdit { ...props } />;
        }

        console.log(props);

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody title={ __( 'Button URL' ) }>
                        <TextControl
                            label={ __( 'Button URL' ) }
                            help={ __( 'Where will someone go when they click this button.' ) }
                            value={ props.attributes.buttonURL || '' }
                            onChange={ ( nextValue ) => {
                                props.setAttributes( {
                                    buttonURL: nextValue,
                                } );
                            } } />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );

    };
}, 'addMyCustomBlockControls' );

addFilter( 'editor.BlockEdit', 'ubc/marketing-button-sidebar-controls', marketingButtonControls );

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			buttonURL: {
				type: 'string',
			},
		} );
	}

	return settings;

}// end addAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addSaveProps( extraProps, blockType, attributes ) {

	// If the current block is valid, add our prop.
	if ( isValidBlockType( blockType.name ) ) {
		extraProps.buttonURL = attributes.buttonURL;
	}

	return extraProps;

}// end addSaveProps()

addFilter( 'blocks.registerBlockType', 'ubc/marketing-button-sidebar-controls-attr', addAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'ubc/marketing-button-sidebar-controls-props', addSaveProps );

export const SauderButton = "";