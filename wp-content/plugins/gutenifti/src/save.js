/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
		<div {...useBlockProps.save } style={{backgroundColor: attributes.bg_color, color: attributes.text_color,paddingTop:attributes.padding_top+'px',paddingLeft:attributes.padding_left+'px',paddingBottom:attributes.padding_bottom+'px',paddingRight:attributes.padding_right+'px',borderRadius:attributes.border_radius+'px',border:attributes.border_px+'px '+attributes.border_type+' '+attributes.border_color}}>
			<p style={{fontSize:attributes.font_size+'px',textAlign:attributes.text_alignment,lineHeight:attributes.line_height+'px'}}>{attributes.textarea_content}</p>
		</div>
	);
}
