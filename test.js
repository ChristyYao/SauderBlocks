const { assign } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;
const { TextControl, PanelBody, RangeControl } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.editor;

console.log( 'hello from test.js' );

export const addMyCustomBlockControls = createHigherOrderComponent( ( BlockEdit ) => {


    return ( props ) => {

        // If this block supports scheduling and is currently selected, add our UI
       return (
            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title={__('My Custom Panel Heading')}>
                        <TextControl
                            label={__('My Custom Control')}
                            help={__('Some help text for my custom control.')}
                            value={props.attributes.christyControl || ''}
                            onChange={(nextValue) => {
                                props.setAttributes({
                                    christyControl: nextValue,
                                });
                            }} />
                        <RangeControl 
                            label="Custom Range"
                            value={ props.attributes.christyRange || '' }
                            onChange={(nextValue) => {
                                props.setAttributes({
                                    christyRange: nextValue,
                                });
                            }}
                            min={ 0 }
                            max={ 100 }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
       );

    };
}, 'addMyCustomBlockControls' );

addFilter( 'editor.BlockEdit', 'myguten/test-block', addMyCustomBlockControls );

export function addAttribute( settings ) {

	settings.attributes = assign( settings.attributes, {
        christyControl: {
            type: 'string',
        },
        // christyRange: {
        //     type: Number,
        // },
    } );

	return settings;

}// end addAttribute()

export function addSaveProps( extraProps, attributes ) {

    extraProps.christyControl = attributes.christyControl;
    //extraProps.christyRange = attributes.christyRange;

	return extraProps;

}// end addSaveProps()

addFilter( 'blocks.registerBlockType', 'my-plugin/add-attr', addAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'my-plugin/add-props', addSaveProps );



export function addAttributeRange( settings ) {

	settings.attributes = assign( settings.attributes, {
        christyRange: {
            type: Number,
        },
    } );

	return settings;

}// end addAttribute()

export function addSavePropsRange( extraProps, attributes ) {

	extraProps.christyRange = attributes.christyRange;

	return extraProps;

}// end addSaveProps()

addFilter( 'blocks.registerBlockType', 'my-plugin/add-attr', addAttributeRange );
addFilter( 'blocks.getSaveContent.extraProps', 'my-plugin/add-props', addSavePropsRange );
