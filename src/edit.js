/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaPlaceholder, InspectorControls } from '@wordpress/block-editor';

import { Button, PanelBody, RangeControl, PanelRow, SelectControl, ToggleControl, ColorPalette } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const { imageToMask, xAxis, yAxis,
		maskScale, imageScale, imageSize,
		maskType, maskWidth, maskRotate,

		offsetShape, offsetColorClass,
		offsetXAxis, offsetYAxis, offsetColor,

		accentType, accentXAxis, accentYAxis, accentShape,
		accentIndex, accentSize, accentRotate,
		accentColor, accentColorClass
	} = attributes;

	const mainStyles = {

	}

	const imageStyles = {
		transform: `translate(${xAxis}px, ${yAxis}px) scale(1.${imageScale}) rotate(-${maskRotate}deg)`,
		backgroundImage: `url(${imageToMask.sizes[imageSize].url})`,
	}

	const maskStyles = {
		transform: `scale(1.${maskScale}) rotate(${maskRotate}deg)`,
		maskSize: `${maskWidth}% ${maskWidth}%`
	}

	const offsetStyles = {
		transform: `scale(1.${maskScale}) translate(${offsetXAxis}px, ${offsetYAxis}px) rotate(${maskRotate}deg)`,
		maskSize: `${maskWidth * 0.89}% ${maskWidth * 0.89}%`,
		backgroundColor: `${offsetColor}`
	}

	const accentStyles = {
		transform: `translate(${accentXAxis}px, ${accentYAxis}px) rotate(${accentRotate}deg)`,
		zIndex: `${accentIndex}`,
		height: `${accentSize}%`,
		backgroundColor: `${accentColor}`
	}


	const colors = wp.data.select("core/editor").getEditorSettings().colors.map(color => {
		return { color: color.color, name: color.slug }
	});

	const offsetColorName = (value) => {
		const selected = colors.filter(eachColor => eachColor.color === value);
		return selected.length > 0 ? setAttributes({ offsetColorClass: `has-${selected[0].name}-background-color has-background`, offsetColor: '' }) : setAttributes({ offsetColor: value, offsetColorClass: '' });
	}

	const accentColorName = (value) => {
		const selected = colors.filter(eachColor => eachColor.color === value);
		return selected.length > 0 ? setAttributes({ accentColorClass: `has-${selected[0].name}-background-color has-background`, accentColor: '' }) : setAttributes({ accentColor: value, accentColorClass: '' });
	}




	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Mask Settings')}>
					<PanelRow>Mask Type</PanelRow>
					<SelectControl
						label={__('Mask Type')}
						value={maskType}
						options={[
							{ label: 'Bars', value: 'cg-mask-bars ' },
							{ label: 'Bean', value: 'cg-mask-bean ' },
							{ label: 'Blob', value: 'cg-mask-blob ' },
							{ label: 'Boxes', value: 'cg-mask-boxes ' },
							{ label: 'Boxes Offset', value: 'cg-mask-boxes-offset ' },
							{ label: 'Circles', value: 'cg-mask-cirlces ' },
							{ label: 'Circle Grunge', value: 'cg-mask-circle-grunge ' },
							{ label: 'Columns', value: 'cg-mask-columns ' },
							{ label: 'Columns Abstract', value: 'cg-mask-columns-abstract ' },
							{ label: 'Columns Random', value: 'cg-mask-columns-random ' },
							{ label: 'Diamonds', value: 'cg-mask-diamonds ' },
							{ label: 'Diamond Arrow', value: 'cg-mask-diamond-arrow ' },
							{ label: 'Grunge Rip', value: 'cg-mask-grunge-rip ' },
							{ label: 'Hexagon', value: 'cg-mask-hexagon ' },
							{ label: 'Honeycomb', value: 'cg-mask-honeycomb ' },
							{ label: 'Iso Cube', value: 'cg-mask-iso-cube ' },
							{ label: 'Iso Square', value: 'cg-mask-iso-square ' },
							{ label: 'Scribble', value: 'cg-mask-scribble ' },
							{ label: 'Sheet', value: 'cg-mask-sheet ' },
							{ label: 'Squares Rounded', value: 'cg-mask-squares-rounded ' },
							{ label: 'Stretch Star', value: 'cg-mask-stretch-star ' },
							{ label: 'Swoop', value: 'cg-mask-swoop ' },
							{ label: 'Trapeziod Grunge', value: 'cg-mask-trapeziod-grunge ' },
							{ label: 'Triangle Grunge', value: 'cg-mask-triangle-grunge ' },

						]}
						onChange={(value) => setAttributes({ maskType: value })}
					/>

					<PanelRow>Mask Size</PanelRow>

					<RangeControl
						__nextHasNoMarginBottom
						label="Mask Width"
						value={maskWidth}
						onChange={(value) => setAttributes({ maskWidth: value })}
						allowReset="true"
						min={0}
						max={130}

					/>

					<RangeControl
						__nextHasNoMarginBottom
						label="Mask Scale"
						value={maskScale}
						onChange={(value) => setAttributes({ maskScale: value })}
						allowReset="true"
						min={0}
						max={9}

					/>
					<PanelRow>Mask Position</PanelRow>
					<RangeControl
						__nextHasNoMarginBottom
						label="Rotate"
						value={maskRotate}
						onChange={(value) => setAttributes({ maskRotate: value })}
						allowReset="true"
						min={0}
						max={360}
					/>

				</PanelBody>
				<PanelBody title={__('Image Settings')} initialOpen={false}>

					<PanelRow>Image Size</PanelRow>
					<SelectControl
						label={__('Image Size')}
						value={imageSize}
						options={[
							{ label: 'Full', value: 'full' },
							{ label: 'Large', value: 'large' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Thumbnail', value: 'thumbnail' }

						]}
						onChange={(value) => setAttributes({ imageSize: value })}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						label="Image Scale"
						value={imageScale}
						onChange={(value) => setAttributes({ imageScale: value })}
						allowReset="true"
						min={0}
						max={9}

					/>

					<PanelRow>Image Position</PanelRow>
					<RangeControl
						__nextHasNoMarginBottom
						label="X Axis"
						value={xAxis}
						onChange={(value) => setAttributes({ xAxis: value })}
						allowReset="true"
						min={-300}
						max={300}

					/>
					<RangeControl
						__nextHasNoMarginBottom
						label="Y Axis"
						value={yAxis}
						onChange={(value) => setAttributes({ yAxis: value })}
						allowReset="true"
						min={-300}
						max={300}
					/>



				</PanelBody>
				<PanelBody title={__('Offset Shape Settings')} initialOpen={false}>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Offset Shape"
						help={
							offsetShape
								? 'Has Offset Shape.'
								: 'No Offset Shape.'
						}
						checked={offsetShape}
						onChange={(value) => {
							setAttributes({ offsetShape: !offsetShape });
						}}
					/>
					{offsetShape && (
						<>
							<PanelRow>Offset Colour</PanelRow>
							<ColorPalette
								colors={colors}
								value={offsetColor}
								onChange={offsetColorName}
							/>

							<PanelRow>Offset Shape Position</PanelRow>
							<RangeControl
								__nextHasNoMarginBottom
								label="X Axis"
								value={offsetXAxis}
								onChange={(value) => setAttributes({ offsetXAxis: value })}
								allowReset="true"
								min={-100}
								max={100}

							/>
							<RangeControl
								__nextHasNoMarginBottom
								label="Y Axis"
								value={offsetYAxis}
								onChange={(value) => setAttributes({ offsetYAxis: value })}
								allowReset="true"
								min={-100}
								max={100}
							/>


						</>
					)}
				</PanelBody>

				<PanelBody title={__('Accent Shape Settings')} initialOpen={false}>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Accent Shape"
						help={
							accentShape
								? 'Has Accent Shape.'
								: 'No Accent Shape.'
						}
						checked={accentShape}
						onChange={(value) => {
							setAttributes({ accentShape: !accentShape });
						}}
					/>
					{accentShape && (
						<>
							<PanelRow>Accent Colour</PanelRow>
							<ColorPalette
								colors={colors}
								value={accentColor}
								onChange={accentColorName}
							/>
							<PanelRow>Accent Type</PanelRow>
							<SelectControl
								label={__('Accent Type')}
								value={accentType}
								options={[
									{ label: 'Brush 1', value: 'cg-accent-brush-1' },
									{ label: 'Brush 2', value: 'cg-accent-brush-2' },
									{ label: 'Circle', value: 'cg-accent-circle ' },
									{ label: 'Circle Lines', value: 'cg-accent-circle-lines ' },
									{ label: 'Dots', value: 'cg-accent-dots ' },
									{ label: 'Hexagon', value: 'cg-accent-hexagon ' },
									{ label: 'Hexagon Lines', value: 'cg-accent-hexagon-lines ' },
									{ label: 'Line Squiggle', value: 'cg-accent-line-squiggle ' },
									{ label: 'Lines Straight', value: 'cg-accent-line-straight ' },
									{ label: 'Lines Zig Zag', value: 'cg-accent-line-zig ' },
									{ label: 'Square', value: 'cg-accent-square ' },
									{ label: 'Square Lines', value: 'cg-accent-square-lines ' },
									{ label: 'Triangle', value: 'cg-accent-triangle ' },
									{ label: 'Triangle Lines', value: 'cg-accent-triangle-lines ' },

								]}
								onChange={(value) => setAttributes({ accentType: value })}
							/>
							<PanelRow>Accent Shape Size</PanelRow>
							<RangeControl
								__nextHasNoMarginBottom
								label="Accent Size"
								value={accentSize}
								onChange={(value) => setAttributes({ accentSize: value })}
								allowReset="true"
								default={100}
								min={0}
								max={150}

							/>
							<PanelRow>Accent Shape Position</PanelRow>
							<RangeControl
								__nextHasNoMarginBottom
								label="X Axis"
								value={accentXAxis}
								onChange={(value) => setAttributes({ accentXAxis: value })}
								allowReset="true"
								min={-500}
								max={500}

							/>
							<RangeControl
								__nextHasNoMarginBottom
								label="Y Axis"
								value={accentYAxis}
								onChange={(value) => setAttributes({ accentYAxis: value })}
								allowReset="true"
								min={-500}
								max={500}
							/>
							<RangeControl
								__nextHasNoMarginBottom
								label="Rotate"
								value={accentRotate}
								onChange={(value) => setAttributes({ accentRotate: value })}
								allowReset="true"
								min={0}
								max={360}
							/>
							<RangeControl
								__nextHasNoMarginBottom
								label="Z Index"
								value={accentIndex}
								onChange={(value) => setAttributes({ accentIndex: value })}
								allowReset="true"
								min={-1}
								max={50}
							/>


						</>
					)}
				</PanelBody>

			</InspectorControls>

			<div style={mainStyles} {...useBlockProps()}>
				{imageToMask != 0 ? (
					<>
						<div className={maskType + " mask"} style={maskStyles}>
							<div className='mask-image' style={imageStyles} />
						</div>
						{accentShape && (
							<>
								<div className={accentType + " accent-shape " + accentColorClass} style={accentStyles}></div>
							</>
						)}
						{offsetShape && (
							<>
								<div className={maskType + " offset-shape " + offsetColorClass} style={offsetStyles}></div>
							</>
						)}


						<button className="button-remove" onClick={() => setAttributes({ imageToMask: [] })}>Remove</button>
					</>
				) : (
					<MediaPlaceholder
						onSelect={
							(image) => {
								setAttributes({ imageToMask: image });
							}
						}
						allowedTypes={['image']}
						multiple={false}
						labels={{ title: 'CTA Image' }}
					>
					</MediaPlaceholder>
				)
				}

			</div>
		</>
	);
}
