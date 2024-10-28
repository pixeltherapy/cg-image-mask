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
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { imageToMask, xAxis, yAxis,
		maskScale, imageScale, imageSize,
		maskType, maskWidth, maskRotate, 

		offsetShape,  offsetColorClass,
		offsetXAxis, offsetYAxis, offsetColor,
		
		accentType, accentXAxis, accentYAxis, accentShape,
		accentIndex, accentSize, accentRotate,
		accentColor, accentColorClass
	} = attributes;

	const mainStyles = {

	}

	const imageStyles = {
		transform: `translate(${xAxis}px, ${yAxis}px) scale(1.${imageScale}) rotate(-${maskRotate}deg)`,
		backgroundImage: `url(${imageToMask.sizes[imageSize].url})`
	}

	const maskStyles = {
		transform: `scale(1.${maskScale}) rotate(${maskRotate}deg)`,
		maskSize: `${maskWidth}% ${maskWidth}%`
	}

	const offsetStyles = {
		transform: `scale(1.${maskScale}) translate(${offsetXAxis}px, ${offsetYAxis}px) rotate(${maskRotate}deg)`,
		maskSize: `${maskWidth}% ${maskWidth}%`,
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
		return selected.length > 0 ? setAttributes({offsetColorClass: `has-${selected[0].name}-background-color has-background`, offsetColor: '' }): setAttributes({offsetColor: value, offsetColorClass: ''});
	}

	const accentColorName = (value) => {
		const selected = colors.filter(eachColor => eachColor.color === value);
		return selected.length > 0 ? setAttributes({accentColorClass: `has-${selected[0].name}-background-color has-background`, accentColor: '' }): setAttributes({accentColor: value, accentColorClass: ''});
	}
	console.log(imageToMask)

	return (
		<>
			<div {...useBlockProps.save()}>
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
			</div>
		</>

	);
}
