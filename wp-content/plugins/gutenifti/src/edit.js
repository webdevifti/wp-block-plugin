/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {TextControl, Panel,PanelBody, TextareaControl, SelectControl} from '@wordpress/components'
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,ColorPalette, InspectorControls} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { ColorPicker } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
		const onChangeBgColor = (hexColor) => {
			setAttributes({bg_color: hexColor});
		}
		const onChangeTextColor = (hexColor) => {
			setAttributes({text_color: hexColor});
		}
		const onChangeContentTextarea = (value) => {
			setAttributes({textarea_content: value});
		}
		const onChangePaddingTop = (value) => {
			setAttributes({padding_top: value});
		}
		const onChangePaddingLeft = (value) => {
			setAttributes({padding_left: value});
		}
		const onChangePaddingRight = (value) => {
			setAttributes({padding_right: value});
		}
		const onChangePaddingBottom = (value) => {
			setAttributes({padding_bottom: value});
		}
		const onChangeBorderRadius = (radius) => {
			setAttributes({border_radius: radius});
		}
		const onChangeTextAlignment = (value) => {
			setAttributes({text_alignment: value});
		}
		const onChangLineHeight = (value) => {
			setAttributes({line_height: value});
		}
		const onChangFontSize = (value) => {
			setAttributes({font_size: value});
		}
		const onChangeBorderType = (value) => {
			setAttributes({border_type:value});
		}
		const onChangeBorder = (value) => {
			setAttributes({border_px: value});
		}
		const onChangeBorderColor = (value) => {
			setAttributes({border_color: value});
		}

	return (
		<div { ...useBlockProps() }>
			
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title="Block Styling" initialOpen={true}>
					<div id="gutenifti-controls-content">
						
						<TextareaControl
							label="Content"
							placeholder='Your content'
							onChange={onChangeContentTextarea}
							value={attributes.textarea_content}
							rows={6}
						/>
					</div>
						<div id="gutenifti-controls">
							<fieldset>
								<legend className='blocks-base-control__label'>
									{__('Background Color','gutenifti')}
								</legend>
								<ColorPalette 
									onChange={onChangeBgColor}
								/>
							</fieldset>
							<fieldset>
								<legend className='blocks-base-control__label'>
									{__('Text Color','gutenifti')}
								</legend>
								<ColorPalette 
									onChange={onChangeTextColor}
								/>
							</fieldset>
						</div>
						
						<div className='gutenifti-controls-content-display-flex'>
						<div>
							
							<SelectControl 
								label="Aligment"
								onChange={onChangeTextAlignment}
								options={[
									{label:"Left", value:"left"},
									{label:"Right", value:"right"},
									{label:"Center", value:"center"},
									{label:"Justify", value:"justify"}
								]
								}
							/>
							
						</div>
						<div>
							<TextControl 
								label="Line Height"
								placeholder='px'
								onChange={onChangLineHeight}
							/>
						</div>
						<div>
							<TextControl 
								label="Font Size"
								placeholder='px'
								onChange={onChangFontSize}
							/>
						</div>
						</div>
						<div id="gutenifti-controls-content-paddings">
							<fieldset>
								<legend className='blocks-base-control__label'>
									{__('Paddings','gutenifti')}
								</legend>
							</fieldset>
							<div className='gutenifti-controls-content-display-flex'>
								<div>
								<TextControl 
									label="Top"
									placeholder="px"
									onChange={onChangePaddingTop}
									value={attributes.padding_top}
								/>
								</div>
								<div>
								<TextControl
									label="Left"
									placeholder="px"
									value={attributes.padding_left}
									onChange={onChangePaddingLeft}
								/>
								</div>
								<div>
								<TextControl 
									label="Bottom"
									placeholder="px"
									onChange={onChangePaddingBottom}
									value={attributes.padding_bottom}
								/>
								</div>
								<div>
								<TextControl 
									label="Right"
									placeholder="px"
									onChange={onChangePaddingRight}
									value={attributes.padding_right}
								/>
								</div>
							</div>
						</div>
						<div id="gutenifti-controls-content-border-radius">
							<div>
								<TextControl 
									label="Border Radius"
									placeholder="px"
									onChange={onChangeBorderRadius}
									value={attributes.border_radius}
								/>
							</div>
							<div className='gutenifti-controls-content-display-flex'>
								<div>
									<TextControl 
										label="Border px"
										placeholder='px'
										onChange={onChangeBorder}
										value={attributes.border_px}
									/>
								</div>
								<div>
									<SelectControl 
										label="Border Type"
										options={[
											{label:"Solid",value:'solid'},
											{label:"Dotted", value:'dotted'},
											{label:"Dashed", value:'dashed '},
											{label:"Double", value:'double'},
											{label:"Ridge", value:'ridge'},
											{label:"Groove", value:'groove'},
										]}
										onChange={onChangeBorderType}
										value={attributes.border_type}
									/>
								</div>
								
							
							</div>
							<div>
									<ColorPicker 
										label='Border Color'
										onChange={onChangeBorderColor}
									/>
								</div>
							
							
						</div>
					</PanelBody>
				</Panel>
			</InspectorControls>
				
			<div style={{backgroundColor: attributes.bg_color, color: attributes.text_color,paddingTop:attributes.padding_top+'px',paddingLeft:attributes.padding_left+'px',paddingBottom:attributes.padding_bottom+'px',paddingRight:attributes.padding_right+'px',borderRadius:attributes.border_radius+'px',border:attributes.border_px+'px '+attributes.border_type+' '+attributes.border_color}}>

				<p style={{fontSize:attributes.font_size+'px',textAlign:attributes.text_alignment, lineHeight:attributes.line_height+'px'}}>{attributes.textarea_content}</p>

			</div>
			
		</div>
	);
}
