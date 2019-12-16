import { SauderButton } from './components/sauder-button/sauder-button';

// import { registerBlockType } from '@wordpress/blocks';
// import {
//     RichText,
//     AlignmentToolbar,
//     BlockControls,
// } from '@wordpress/block-editor';
// import { withSelect } from '@wordpress/data';
// import { ServerSideRender } from '@wordpress/components';

// import { addMyCustomBlockControls } from './test';
 
// console.log('Hello');

// //SAUDER SMILEY
// registerBlockType( 'myguten/test-block', {
//     title: 'Sauder',
//     icon: 'smiley',
//     category: 'layout',
//     example: {},
//     edit() {
//         return <div style={ blockStyle }>Hello World, step 1 (from the editor).</div>;
//     },
//     save() {
//         return <div style={ blockStyle }>Hello World, step 1 (from the frontend).</div>;
//     },
// } );

// const blockStyle = {
//     backgroundColor: '#900',
//     color: '#fff',
//     padding: '20px',
// };
 
// //EXAMPLE 1
// //BASIC
// registerBlockType( 'gutenberg-examples/example-01-basic-esnext', {
//     title: 'Example: Basic (esnext)',
//     icon: 'universal-access-alt',
//     category: 'layout',
//     example: {},
//     edit() {
//         return <div style={ blockStyle }>Hello World, step 1 (from the editor).</div>;
//     },
//     save() {
//         return <div style={ blockStyle }>Hello World, step 1 (from the frontend).</div>;
//     },
// } );

// //EXAMPLE 2
// //STYLESHEETS
// registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
//     title: 'Example: Stylesheets',
 
//     icon: 'universal-access-alt',
 
//     category: 'layout',
 
//     example: {},
 
//     edit( { className } ) {
//         return <p className={ className }>Hello World, step 2 (from the editor, in green).</p>;
//     },
 
//     save() {
//         return <p>Hello World, step 2 (from the frontend, in red).</p>;
//     }
// } );

// //EXAMPLE 3
// //EDITABLE
// registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
//     title: 'Example: Editable (esnext)',
//     icon: 'universal-access-alt',
//     category: 'layout',
//     attributes: {
//         content: {
//             type: 'array',
//             source: 'children',
//             selector: 'p',
//         },
//     },
//     example: {
//         attributes: {
//             content: 'Hello World',
//         },
//     },
//     edit: ( props ) => {
//         const { attributes: { content }, setAttributes, className } = props;
//         const onChangeContent = ( newContent ) => {
//             setAttributes( { content: newContent } );
//         };
//         return (
//             <RichText
//                 tagName="p"
//                 className={ className }
//                 onChange={ onChangeContent }
//                 value={ content }
//             />
//         );
//     },
//     save: ( props ) => {
//         return <RichText.Content tagName="p" value={ props.attributes.content } />;
//     },
// } );

// //EXAMPLE 4
// //CONTROLS
// registerBlockType( 'gutenberg-examples/example-04-controls-esnext', {
//     title: 'Example: Controls (esnext)',
//     icon: 'universal-access-alt',
//     category: 'layout',
//     attributes: {
//         content: {
//             type: 'array',
//             source: 'children',
//             selector: 'p',
//         },
//         alignment: {
//             type: 'string',
//             default: 'none',
//         },
//     },
//     example: {
//         attributes: {
//             content: 'Hello World',
//             alignment: 'right',
//         },
//     },
//     edit: ( props ) => {
//         const {
//             attributes: {
//                 content,
//                 alignment,
//             },
//             className,
//         } = props;
 
//      const onChangeContent = ( newContent ) => {
//             props.setAttributes( { content: newContent } );
//         };
 
//         const onChangeAlignment = ( newAlignment ) => {
//             props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
//         };
 
//         return (
//             <div>
//                 {
//                     <BlockControls>
//                         <AlignmentToolbar
//                             value={ alignment }
//                             onChange={ onChangeAlignment }
//                         />
//                     </BlockControls>
//                 }
//                 <RichText
//                     className={ className }
//                     style={ { textAlign: alignment } }
//                     tagName="p"
//                     onChange={ onChangeContent }
//                     value={ content }
//                 />
//             </div>
//         );
//     },
//     save: ( props ) => {
//         return (
//             <RichText.Content
//                 className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
//                 tagName="p"
//                 value={ props.attributes.content }
//             />
//         );
//     },
// } );



// //EXAMPLE 5
// //DYNAMIC
// registerBlockType( 'gutenberg-examples/example-05-dynamic', {
//     title: 'Example: last post',
//     icon: 'megaphone',
//     category: 'widgets',

//     edit: function( props ) {
//         return (
//             <ServerSideRender
//                 block="gutenberg-examples/example-05-dynamic"
//                 attributes={ props.attributes }
//             />
//         );
//     },
 
//     // edit: withSelect( ( select ) => {
//     //     return {
//     //         posts: select( 'core' ).getEntityRecords( 'postType', 'post' )
//     //     };
//     // } )( ( { posts, className } ) => {
 
//     //     if ( ! posts ) {
//     //         return 'Loading...';
//     //     }
 
//     //     if ( posts && posts.length === 0 ) {
//     //         return 'No posts';
//     //     }
 
//     //     let post = posts[ 0 ];
 
//     //     return <a className={ className } href={ post.link }>
//     //         { post.title.rendered }
//     //     </a>;
//     // } ),
// } );