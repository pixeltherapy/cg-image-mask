/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  const {
    imageToMask,
    xAxis,
    yAxis,
    maskScale,
    imageScale,
    imageSize,
    maskType,
    maskWidth,
    maskRotate,
    offsetShape,
    offsetColorClass,
    offsetXAxis,
    offsetYAxis,
    offsetColor,
    accentType,
    accentXAxis,
    accentYAxis,
    accentShape,
    accentIndex,
    accentSize,
    accentRotate,
    accentColor,
    accentColorClass
  } = attributes;
  const mainStyles = {};
  const imageStyles = {
    transform: `translate(${xAxis}px, ${yAxis}px) scale(1.${imageScale}) rotate(-${maskRotate}deg)`,
    backgroundImage: `url(${imageToMask.sizes[imageSize].url})`
  };
  const maskStyles = {
    transform: `scale(1.${maskScale}) rotate(${maskRotate}deg)`,
    maskSize: `${maskWidth}% ${maskWidth}%`
  };
  const offsetStyles = {
    transform: `scale(1.${maskScale}) translate(${offsetXAxis}px, ${offsetYAxis}px) rotate(${maskRotate}deg)`,
    maskSize: `${maskWidth * 0.89}% ${maskWidth * 0.89}%`,
    backgroundColor: `${offsetColor}`
  };
  const accentStyles = {
    transform: `translate(${accentXAxis}px, ${accentYAxis}px) rotate(${accentRotate}deg)`,
    zIndex: `${accentIndex}`,
    height: `${accentSize}%`,
    backgroundColor: `${accentColor}`
  };
  const colors = wp.data.select("core/editor").getEditorSettings().colors.map(color => {
    return {
      color: color.color,
      name: color.slug
    };
  });
  const offsetColorName = value => {
    const selected = colors.filter(eachColor => eachColor.color === value);
    return selected.length > 0 ? setAttributes({
      offsetColorClass: `has-${selected[0].name}-background-color has-background`,
      offsetColor: ''
    }) : setAttributes({
      offsetColor: value,
      offsetColorClass: ''
    });
  };
  const accentColorName = value => {
    const selected = colors.filter(eachColor => eachColor.color === value);
    return selected.length > 0 ? setAttributes({
      accentColorClass: `has-${selected[0].name}-background-color has-background`,
      accentColor: ''
    }) : setAttributes({
      accentColor: value,
      accentColorClass: ''
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mask Settings'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: "Mask Type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mask Type'),
          value: maskType,
          options: [{
            label: 'Bars',
            value: 'cg-mask-bars '
          }, {
            label: 'Bean',
            value: 'cg-mask-bean '
          }, {
            label: 'Blob',
            value: 'cg-mask-blob '
          }, {
            label: 'Boxes',
            value: 'cg-mask-boxes '
          }, {
            label: 'Boxes Offset',
            value: 'cg-mask-boxes-offset '
          }, {
            label: 'Circles',
            value: 'cg-mask-cirlces '
          }, {
            label: 'Circle Grunge',
            value: 'cg-mask-circle-grunge '
          }, {
            label: 'Columns',
            value: 'cg-mask-columns '
          }, {
            label: 'Columns Abstract',
            value: 'cg-mask-columns-abstract '
          }, {
            label: 'Columns Random',
            value: 'cg-mask-columns-random '
          }, {
            label: 'Diamonds',
            value: 'cg-mask-diamonds '
          }, {
            label: 'Diamond Arrow',
            value: 'cg-mask-diamond-arrow '
          }, {
            label: 'Grunge Rip',
            value: 'cg-mask-grunge-rip '
          }, {
            label: 'Hexagon',
            value: 'cg-mask-hexagon '
          }, {
            label: 'Honeycomb',
            value: 'cg-mask-honeycomb '
          }, {
            label: 'Iso Cube',
            value: 'cg-mask-iso-cube '
          }, {
            label: 'Iso Square',
            value: 'cg-mask-iso-square '
          }, {
            label: 'Scribble',
            value: 'cg-mask-scribble '
          }, {
            label: 'Sheet',
            value: 'cg-mask-sheet '
          }, {
            label: 'Squares Rounded',
            value: 'cg-mask-squares-rounded '
          }, {
            label: 'Stretch Star',
            value: 'cg-mask-stretch-star '
          }, {
            label: 'Swoop',
            value: 'cg-mask-swoop '
          }, {
            label: 'Trapeziod Grunge',
            value: 'cg-mask-trapeziod-grunge '
          }, {
            label: 'Triangle Grunge',
            value: 'cg-mask-triangle-grunge '
          }],
          onChange: value => setAttributes({
            maskType: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: "Mask Size"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          __nextHasNoMarginBottom: true,
          label: "Mask Width",
          value: maskWidth,
          onChange: value => setAttributes({
            maskWidth: value
          }),
          allowReset: "true",
          min: 0,
          max: 130
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          __nextHasNoMarginBottom: true,
          label: "Mask Scale",
          value: maskScale,
          onChange: value => setAttributes({
            maskScale: value
          }),
          allowReset: "true",
          min: 0,
          max: 9
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: "Mask Position"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          __nextHasNoMarginBottom: true,
          label: "Rotate",
          value: maskRotate,
          onChange: value => setAttributes({
            maskRotate: value
          }),
          allowReset: "true",
          min: 0,
          max: 360
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Settings'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: "Image Size"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Size'),
          value: imageSize,
          options: [{
            label: 'Full',
            value: 'full'
          }, {
            label: 'Large',
            value: 'large'
          }, {
            label: 'Medium',
            value: 'medium'
          }, {
            label: 'Thumbnail',
            value: 'thumbnail'
          }],
          onChange: value => setAttributes({
            imageSize: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          __nextHasNoMarginBottom: true,
          label: "Image Scale",
          value: imageScale,
          onChange: value => setAttributes({
            imageScale: value
          }),
          allowReset: "true",
          min: 0,
          max: 9
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: "Image Position"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          __nextHasNoMarginBottom: true,
          label: "X Axis",
          value: xAxis,
          onChange: value => setAttributes({
            xAxis: value
          }),
          allowReset: "true",
          min: -300,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          __nextHasNoMarginBottom: true,
          label: "Y Axis",
          value: yAxis,
          onChange: value => setAttributes({
            yAxis: value
          }),
          allowReset: "true",
          min: -300,
          max: 300
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Offset Shape Settings'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          __nextHasNoMarginBottom: true,
          label: "Offset Shape",
          help: offsetShape ? 'Has Offset Shape.' : 'No Offset Shape.',
          checked: offsetShape,
          onChange: value => {
            setAttributes({
              offsetShape: !offsetShape
            });
          }
        }), offsetShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: "Offset Colour"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            colors: colors,
            value: offsetColor,
            onChange: offsetColorName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: "Offset Shape Position"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "X Axis",
            value: offsetXAxis,
            onChange: value => setAttributes({
              offsetXAxis: value
            }),
            allowReset: "true",
            min: -100,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "Y Axis",
            value: offsetYAxis,
            onChange: value => setAttributes({
              offsetYAxis: value
            }),
            allowReset: "true",
            min: -100,
            max: 100
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accent Shape Settings'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          __nextHasNoMarginBottom: true,
          label: "Accent Shape",
          help: accentShape ? 'Has Accent Shape.' : 'No Accent Shape.',
          checked: accentShape,
          onChange: value => {
            setAttributes({
              accentShape: !accentShape
            });
          }
        }), accentShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: "Accent Colour"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            colors: colors,
            value: accentColor,
            onChange: accentColorName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: "Accent Type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accent Type'),
            value: accentType,
            options: [{
              label: 'Brush 1',
              value: 'cg-accent-brush-1'
            }, {
              label: 'Brush 2',
              value: 'cg-accent-brush-2'
            }, {
              label: 'Circle',
              value: 'cg-accent-circle '
            }, {
              label: 'Circle Lines',
              value: 'cg-accent-circle-lines '
            }, {
              label: 'Dots',
              value: 'cg-accent-dots '
            }, {
              label: 'Hexagon',
              value: 'cg-accent-hexagon '
            }, {
              label: 'Hexagon Lines',
              value: 'cg-accent-hexagon-lines '
            }, {
              label: 'Line Squiggle',
              value: 'cg-accent-line-squiggle '
            }, {
              label: 'Lines Straight',
              value: 'cg-accent-line-straight '
            }, {
              label: 'Lines Zig Zag',
              value: 'cg-accent-line-zig '
            }, {
              label: 'Square',
              value: 'cg-accent-square '
            }, {
              label: 'Square Lines',
              value: 'cg-accent-square-lines '
            }, {
              label: 'Triangle',
              value: 'cg-accent-triangle '
            }, {
              label: 'Triangle Lines',
              value: 'cg-accent-triangle-lines '
            }],
            onChange: value => setAttributes({
              accentType: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: "Accent Shape Size"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "Accent Size",
            value: accentSize,
            onChange: value => setAttributes({
              accentSize: value
            }),
            allowReset: "true",
            default: 100,
            min: 0,
            max: 150
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: "Accent Shape Position"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "X Axis",
            value: accentXAxis,
            onChange: value => setAttributes({
              accentXAxis: value
            }),
            allowReset: "true",
            min: -500,
            max: 500
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "Y Axis",
            value: accentYAxis,
            onChange: value => setAttributes({
              accentYAxis: value
            }),
            allowReset: "true",
            min: -500,
            max: 500
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "Rotate",
            value: accentRotate,
            onChange: value => setAttributes({
              accentRotate: value
            }),
            allowReset: "true",
            min: 0,
            max: 360
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: "Z Index",
            value: accentIndex,
            onChange: value => setAttributes({
              accentIndex: value
            }),
            allowReset: "true",
            min: -1,
            max: 50
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: mainStyles,
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: imageToMask != 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: maskType + " mask",
          style: maskStyles,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "mask-image",
            style: imageStyles
          })
        }), accentShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: accentType + " accent-shape " + accentColorClass,
            style: accentStyles
          })
        }), offsetShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: maskType + " offset-shape " + offsetColorClass,
            style: offsetStyles
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "button-remove",
          onClick: () => setAttributes({
            imageToMask: []
          }),
          children: "Remove"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
        onSelect: image => {
          setAttributes({
            imageToMask: image
          });
        },
        allowedTypes: ['image'],
        multiple: false,
        labels: {
          title: 'CTA Image'
        }
      })
    })]
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save({
  attributes
}) {
  const {
    imageToMask,
    xAxis,
    yAxis,
    maskScale,
    imageScale,
    imageSize,
    maskType,
    maskWidth,
    maskRotate,
    offsetShape,
    offsetColorClass,
    offsetXAxis,
    offsetYAxis,
    offsetColor,
    accentType,
    accentXAxis,
    accentYAxis,
    accentShape,
    accentIndex,
    accentSize,
    accentRotate,
    accentColor,
    accentColorClass
  } = attributes;
  const mainStyles = {};
  const imageStyles = {
    transform: `translate(${xAxis}px, ${yAxis}px) scale(1.${imageScale}) rotate(-${maskRotate}deg)`,
    backgroundImage: `url(${imageToMask.sizes[imageSize].url})`
  };
  const maskStyles = {
    transform: `scale(1.${maskScale}) rotate(${maskRotate}deg)`,
    maskSize: `${maskWidth}% ${maskWidth}%`
  };
  const offsetStyles = {
    transform: `scale(1.${maskScale}) translate(${offsetXAxis}px, ${offsetYAxis}px) rotate(${maskRotate}deg)`,
    maskSize: `${maskWidth}% ${maskWidth}%`,
    backgroundColor: `${offsetColor}`
  };
  const accentStyles = {
    transform: `translate(${accentXAxis}px, ${accentYAxis}px) rotate(${accentRotate}deg)`,
    zIndex: `${accentIndex}`,
    height: `${accentSize}%`,
    backgroundColor: `${accentColor}`
  };
  const colors = wp.data.select("core/editor").getEditorSettings().colors.map(color => {
    return {
      color: color.color,
      name: color.slug
    };
  });
  const offsetColorName = value => {
    const selected = colors.filter(eachColor => eachColor.color === value);
    return selected.length > 0 ? setAttributes({
      offsetColorClass: `has-${selected[0].name}-background-color has-background`,
      offsetColor: ''
    }) : setAttributes({
      offsetColor: value,
      offsetColorClass: ''
    });
  };
  const accentColorName = value => {
    const selected = colors.filter(eachColor => eachColor.color === value);
    return selected.length > 0 ? setAttributes({
      accentColorClass: `has-${selected[0].name}-background-color has-background`,
      accentColor: ''
    }) : setAttributes({
      accentColor: value,
      accentColorClass: ''
    });
  };
  console.log(imageToMask);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: maskType + " mask",
        style: maskStyles,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "mask-image",
          style: imageStyles
        })
      }), accentShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: accentType + " accent-shape " + accentColorClass,
          style: accentStyles
        })
      }), offsetShape && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: maskType + " offset-shape " + offsetColorClass,
          style: offsetStyles
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"cg/cg-image-mask","version":"0.1.2","title":"CG Image Mask","category":"media","icon":"format-image","description":"Custom Block for masking images with SVG shapes","keywords":["image","mask","svg"],"example":{},"supports":{"html":false,"align":true},"attributes":{"imageToMask":{"type":"object","default":{}},"imageSize":{"type":"string","default":"large"},"xAxis":{"type":"number","default":0},"yAxis":{"type":"number","default":0},"imageScale":{"type":"number","default":0},"maskScale":{"type":"number","default":0},"maskColor":{"type":"string","default":"black"},"maskWidth":{"type":"number","default":100},"maskRotate":{"type":"number","default":0},"accentType":{"type":"string"},"maskType":{"type":"string"},"offsetShape":{"type":"boolean","default":false},"offsetXAxis":{"type":"number","default":0},"offsetYAxis":{"type":"number","default":0},"accentShape":{"type":"boolean","default":false},"accentSize":{"type":"number","default":0},"accentXAxis":{"type":"number","default":0},"accentYAxis":{"type":"number","default":0},"accentIndex":{"type":"number","default":3},"accentRotate":{"type":"number","default":0}},"textdomain":"cg-image-mask","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcg_image_mask"] = self["webpackChunkcg_image_mask"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map