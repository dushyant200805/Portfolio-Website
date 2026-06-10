/* @ds-bundle: {"format":3,"namespace":"DushyantPrajapatDesignSystem_168b3f","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MarqueeRow","sourcePath":"components/core/MarqueeRow.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c66b461e49f9","components/core/Badge.jsx":"fbed01ee35a6","components/core/Button.jsx":"a1d886e26fae","components/core/Card.jsx":"304a19564100","components/core/Chip.jsx":"8f156b52099e","components/core/Eyebrow.jsx":"46dc6f841444","components/core/IconButton.jsx":"a3d2328fd9f9","components/core/MarqueeRow.jsx":"eae6e6dcef2e","components/core/StatBlock.jsx":"64b9fc3380bd","components/core/Tag.jsx":"a3a3f225604e","components/forms/Input.jsx":"c5c7e66c3290","components/forms/Select.jsx":"e1142b52c399","components/forms/Textarea.jsx":"a5762929761d","ui_kits/portfolio/ContactScreen.jsx":"ec24804840c8","ui_kits/portfolio/HomeScreen.jsx":"f0f00e1b6c3c","ui_kits/portfolio/ServicesScreen.jsx":"d1f763bb9c51","ui_kits/portfolio/WorkScreen.jsx":"900121ac1063","ui_kits/portfolio/kit-ui.jsx":"de0c4ae50ff2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DushyantPrajapatDesignSystem_168b3f = window.DushyantPrajapatDesignSystem_168b3f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — round monogram avatar. Initials in Syne over an elevated or
 * gradient surface. Used in testimonials and the quote card.
 */
function Avatar({
  initials,
  size = 44,
  gradient = false,
  color,
  style = {},
  ...rest
}) {
  const bg = gradient ? 'linear-gradient(135deg, var(--accent-orange), var(--accent-purple))' : color || 'var(--bg-elevated)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      border: gradient || color ? 'none' : '1px solid var(--border)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: size * 0.34,
      color: gradient ? '#fff' : 'var(--text-primary)',
      flexShrink: 0,
      ...style
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status pill with an optional leading dot. Used for
 * "Available for freelance" style indicators. The green dot pulses.
 */
function Badge({
  children,
  dot = true,
  dotColor = 'var(--accent-green)',
  pulse = true,
  variant = 'surface',
  style = {},
  ...rest
}) {
  const variants = {
    surface: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    },
    elevated: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    },
    bare: {
      background: 'transparent',
      border: 'none',
      color: 'var(--text-secondary)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      borderRadius: 'var(--radius-full)',
      padding: variant === 'bare' ? '0' : '8px 16px',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      ...variants[variant],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: dotColor,
      flexShrink: 0,
      animation: pulse ? 'ds-pulse 2s ease infinite' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action control. Pill-shaped, DM Sans 600.
 * Primary inverts to orange on hover; outline fills to elevated surface.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  as = 'button',
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.8125rem',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '0.9375rem',
      gap: '8px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '1rem',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--text-primary)',
      color: 'var(--bg)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border)'
    },
    accent: {
      background: 'var(--accent-orange)',
      color: '#fff',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--accent-orange)',
      color: '#fff'
    },
    outline: {
      background: 'var(--bg-elevated)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-light)'
    },
    accent: {
      filter: 'brightness(1.08)'
    },
    ghost: {
      color: 'var(--text-primary)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: as === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius-full)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      whiteSpace: 'nowrap',
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hoverStyles[variant] : {}),
      ...style
    }
  }, rest), icon && iconPosition === 'left' && icon, children, icon && iconPosition === 'right' && icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's signature surface. Hairline border, 24px radius,
 * lifts + border-lightens on hover. Optional blurred "orb" and grid
 * texture. Supports tinted/colored backgrounds (orange, blue, etc).
 */
function Card({
  children,
  background = 'var(--bg-card)',
  padding = '32px',
  radius = 'var(--radius-lg)',
  orb = null,
  // e.g. { color: 'var(--accent-orange)', size: 260, x: '-40px', y: '-60px', opacity: 0.18 }
  grid = false,
  interactive = true,
  border = '1px solid var(--border)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background,
      border,
      borderColor: interactive && hover ? 'var(--border-light)' : undefined,
      borderRadius: radius,
      padding,
      transition: 'border-color 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), grid && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }
  }), orb && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: orb.size || 240,
      height: orb.size || 240,
      top: orb.y ?? '-60px',
      right: orb.x ?? '-40px',
      borderRadius: '50%',
      background: orb.color || 'var(--accent-orange)',
      filter: 'blur(60px)',
      opacity: orb.opacity ?? 0.2,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      height: '100%'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — interactive pill for skills/tools (tool-chip). Border brightens
 * and text lightens to white on hover. Sentence-case, not uppercase.
 */
function Chip({
  children,
  active = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = hover || active;
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'var(--bg-surface)',
      border: `1px solid ${on ? 'var(--border-light)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-full)',
      padding: '6px 14px',
      fontSize: '0.75rem',
      fontWeight: 500,
      color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
      cursor: 'default',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the signature uppercase section opener with a leading rule.
 * Pairs above section titles ("What I do", "Portfolio").
 */
function Eyebrow({
  children,
  rule = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '1px',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — circular icon-only control. The brand's "card arrow"
 * affordance: a 40px round button that translates up-and-right on hover.
 */
function IconButton({
  children,
  size = 40,
  variant = 'subtle',
  as = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    subtle: {
      base: {
        background: 'rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.7)'
      },
      hover: {
        background: 'rgba(255,255,255,0.2)',
        color: 'var(--text-primary)',
        transform: 'translate(3px,-3px)'
      }
    },
    outline: {
      base: {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)'
      },
      hover: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-light)',
        transform: 'translate(3px,-3px)'
      }
    },
    accent: {
      base: {
        background: 'var(--accent-orange)',
        color: '#fff'
      },
      hover: {
        filter: 'brightness(1.1)',
        transform: 'translate(3px,-3px)'
      }
    },
    dark: {
      base: {
        background: 'rgba(8,8,8,0.15)',
        color: 'rgba(8,8,8,0.6)'
      },
      hover: {
        background: 'rgba(8,8,8,0.25)',
        color: 'var(--bg)',
        transform: 'translate(3px,-3px)'
      }
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      border: variants[variant].base.border || '1px solid transparent',
      cursor: 'pointer',
      flexShrink: 0,
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      ...variants[variant].base,
      ...(hover ? variants[variant].hover : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MarqueeRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MarqueeRow — the infinite horizontal ticker of skills/keywords. Syne,
 * uppercase, muted; each item has an orange dot. Pauses on hover.
 */
function MarqueeRow({
  items = [],
  speed = 30,
  bordered = true,
  style = {},
  ...rest
}) {
  const doubled = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      position: 'relative',
      padding: '20px 0',
      borderTop: bordered ? '1px solid var(--border)' : 'none',
      borderBottom: bordered ? '1px solid var(--border)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-marquee-track",
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `ds-marquee ${speed}s linear infinite`
    },
    onMouseEnter: e => e.currentTarget.style.animationPlayState = 'paused',
    onMouseLeave: e => e.currentTarget.style.animationPlayState = 'running'
  }, doubled.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      padding: '0 32px',
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
      fontWeight: 600,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--accent-orange)',
      flexShrink: 0
    }
  }), item))));
}
Object.assign(__ds_scope, { MarqueeRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MarqueeRow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a big Syne number with an uppercase label beneath. Used in
 * hero stat rows and inside cards (e.g. "17+ / Projects").
 */
function StatBlock({
  value,
  label,
  accent = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '1.75rem',
    md: 'clamp(1.75rem, 3vw, 2.5rem)',
    lg: 'clamp(2rem, 4vw, 3rem)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: sizes[size],
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: accent ? 'var(--accent-orange)' : 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6875rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginTop: '6px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — tiny uppercase, letter-spaced label. Two flavors: "outline"
 * (work-tag, hairline pill on dark) and "soft" (card-tag, translucent fill
 * for use on colored cards).
 */
function Tag({
  children,
  variant = 'outline',
  tone = 'light',
  style = {},
  ...rest
}) {
  const variants = {
    outline: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      color: 'var(--text-muted)'
    },
    soft: tone === 'dark' ? {
      background: 'rgba(8,8,8,0.15)',
      color: 'rgba(8,8,8,0.6)',
      border: 'none'
    } : {
      background: 'rgba(255,255,255,0.1)',
      color: 'rgba(255,255,255,0.7)',
      border: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      borderRadius: 'var(--radius-full)',
      padding: '4px 12px',
      fontSize: '0.6875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field on the elevated surface. Hairline border that turns
 * orange on focus. Pairs with an uppercase label.
 */
function Input({
  label,
  id,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--bg-elevated)',
      border: `1px solid ${focus ? 'var(--accent-orange)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-primary)',
      outline: 'none',
      width: '100%',
      transition: 'border-color 0.3s cubic-bezier(0.4,0,0.2,1)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native select with a custom chevron. Matches Input.
 */
function Select({
  label,
  id,
  options = [],
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const chevron = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--bg-elevated)',
      backgroundImage: chevron,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      border: `1px solid ${focus ? 'var(--accent-orange)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 40px 14px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-primary)',
      outline: 'none',
      width: '100%',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      appearance: 'none',
      transition: 'border-color 0.3s cubic-bezier(0.4,0,0.2,1)',
      ...style
    }
  }, rest), options.map(opt => {
    const value = typeof opt === 'string' ? opt : opt.value;
    const labelText = typeof opt === 'string' ? opt : opt.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value,
      style: {
        background: 'var(--bg-elevated)'
      }
    }, labelText);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multiline field matching Input. Orange focus border, resizable.
 */
function Textarea({
  label,
  id,
  rows = 5,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--bg-elevated)',
      border: `1px solid ${focus ? 'var(--accent-orange)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-primary)',
      outline: 'none',
      width: '100%',
      minHeight: '140px',
      resize: 'vertical',
      transition: 'border-color 0.3s cubic-bezier(0.4,0,0.2,1)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ContactScreen.jsx
try { (() => {
/* Contact screen — hero + info column + working contact form */

function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, label), children);
}
function TextField({
  label,
  type = 'text',
  placeholder,
  textarea,
  options
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    background: 'var(--bg-elevated)',
    border: `1px solid ${focus ? 'var(--accent-orange)' : 'var(--border)'}`,
    borderRadius: 16,
    padding: '14px 18px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    outline: 'none',
    width: '100%',
    transition: `border-color ${EASE}`,
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement(Field, {
    label: label
  }, textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      minHeight: 140,
      resize: 'vertical'
    }
  }) : options ? /*#__PURE__*/React.createElement("select", {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      paddingRight: 40
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    style: {
      background: 'var(--bg-elevated)'
    }
  }, o))) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: base
  }));
}
function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "Project budget",
    options: ['Select a range', '< $1,000', '$1,000 – $5,000', '$5,000 – $10,000', '$10,000+']
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Message",
    textarea: true,
    placeholder: "Tell me about your project\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: sent ? 'var(--accent-green)' : 'var(--text-primary)',
      color: sent ? '#fff' : 'var(--bg)',
      border: 'none',
      borderRadius: 999,
      padding: '16px 32px',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: '100%',
      transition: `all ${EASE}`
    }
  }, sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  }), "Message Sent!") : /*#__PURE__*/React.createElement(React.Fragment, null, "Send message ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16
  }))));
}
function ContactScreen() {
  const info = [['Email', 'dush8387@gmail.com'], ['Location', 'India · Remote globally'], ['Availability', 'Open — freelance & full-time']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '160px 40px 80px',
      maxWidth: 1400,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(3rem,8vw,7rem)',
      letterSpacing: '-0.05em',
      lineHeight: 0.9
    }
  }, "Let's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-orange)'
    }
  }, "talk")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--text-secondary)',
      maxWidth: 500,
      margin: '0 auto',
      lineHeight: 1.7
    }
  }, "Have a project in mind? I'm open to freelance work and full-time opportunities. Let's create something extraordinary together.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 100px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, info.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.25rem'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, [['github', 'GitHub'], ['linkedin', 'LinkedIn']].map(([ic, lb]) => /*#__PURE__*/React.createElement("span", {
    key: lb,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      borderRadius: 999,
      padding: '10px 18px',
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  }), lb)))), /*#__PURE__*/React.createElement(ContactForm, null))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Home screen — hero, marquee ticker, bento grid, services preview */

function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '88vh',
      padding: '120px 40px 70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
      backgroundSize: '80px 80px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 600,
      height: 600,
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      background: 'var(--accent-orange)',
      top: -200,
      right: -100
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 600,
      height: 600,
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      background: 'var(--accent-blue)',
      bottom: -200,
      left: -100
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 1400,
      width: '100%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    style: {
      marginBottom: 32
    }
  }, "Available for freelance & full-time"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 44px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(3.5rem,10vw,9rem)',
      lineHeight: 0.9,
      letterSpacing: '-0.04em'
    }
  }, /*#__PURE__*/React.createElement("div", null, "UI/UX"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      WebkitTextStroke: '2px rgba(245,245,245,0.3)',
      color: 'transparent'
    }
  }, "DESIGNER"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      borderRadius: 999,
      padding: '6px 14px',
      fontSize: '0.75rem',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      marginBottom: 18,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), "17+ Projects")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-orange)'
    }
  }, "&"), " DEV")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 380,
      color: 'var(--text-secondary)',
      fontSize: '1rem',
      lineHeight: 1.7,
      margin: 0
    }
  }, "Crafting premium digital experiences that blend aesthetic precision with functional elegance. Based in India, working globally."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "17+",
    label: "Projects"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1+",
    label: "Years Exp"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "Satisfaction",
    accent: true
  })))));
}
function Marquee() {
  const items = ['UI/UX Design', 'Frontend Development', 'React.js', 'Figma', 'Next.js', 'Interaction Design', 'Branding', 'Motion Design', 'Tailwind CSS', 'TypeScript'];
  const doubled = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '20px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'ds-marquee 30s linear infinite'
    }
  }, doubled.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 32px',
      fontFamily: 'var(--font-heading)',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent-orange)'
    }
  }), it))));
}
function Bento({
  onNav
}) {
  const cardLabel = {
    fontSize: '0.6875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'rgba(245,245,245,0.4)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 40px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "What I do",
    title: "Studio",
    dim: "overview",
    link: "View all work",
    onLink: () => onNav('work')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridAutoRows: 'minmax(80px,auto)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    background: "linear-gradient(135deg,#0f0f0f 0%,#1a0a00 100%)",
    padding: 40,
    orb: {
      color: 'var(--accent-orange)',
      size: 300,
      opacity: 0.12,
      x: -50,
      y: -50
    },
    style: {
      gridColumn: '1 / 8',
      gridRow: '1 / 4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cardLabel
  }, "Primary discipline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    soft: true
  }, "React.js"), /*#__PURE__*/React.createElement(Tag, {
    soft: true
  }, "Figma"), /*#__PURE__*/React.createElement(Tag, {
    soft: true
  }, "Next.js"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(2rem,4vw,3rem)',
      letterSpacing: '-0.03em',
      lineHeight: 0.9,
      margin: '32px 0 14px'
    }
  }, "Design", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-orange)'
    }
  }, "&"), " Code"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 420,
      fontSize: '0.9375rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      margin: '0 0 22px'
    }
  }, "Bridging the gap between great design and solid engineering \u2014 crafting interfaces that look premium and perform flawlessly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      paddingTop: 22,
      borderTop: '1px solid var(--white-fade)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "17+",
    label: "Projects"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3+",
    label: "Yrs Exp"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "Remote-ready",
    accent: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 13
    }),
    onClick: () => onNav('work'),
    style: {
      marginLeft: 'auto'
    }
  }, "See Work"))), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      gridColumn: '8 / 13',
      gridRow: '1 / 2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.75rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-green)',
      animation: 'ds-pulse 2s ease infinite'
    }
  }), "Currently available"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.375rem',
      marginBottom: 8
    }
  }, "Open to Work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: '0 0 14px'
    }
  }, "Accepting freelance & full-time opportunities in 2025."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, [['clock', '⚡ Response within 24 hrs'], ['pin', 'India · IST (UTC +5:30)'], ['globe', 'Remote globally']].map(([ic, tx]) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 12
  }), tx)))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 13
    }),
    onClick: () => onNav('contact'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Let's talk")), /*#__PURE__*/React.createElement(Card, {
    background: "var(--accent-orange)",
    padding: 32,
    orb: {
      color: '#fff',
      size: 200,
      opacity: 0.1
    },
    style: {
      gridColumn: '8 / 13',
      gridRow: '2 / 4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    soft: true,
    tone: "dark"
  }, "Approach"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(1.4rem,2.8vw,2rem)',
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: '#080808',
      marginBottom: 14
    }
  }, "Artisanal", /*#__PURE__*/React.createElement("br", null), "Quality", /*#__PURE__*/React.createElement("br", null), "at Scale"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Studio creativity', 'Atelier precision', 'Code & design unified'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.8rem',
      color: 'rgba(8,8,8,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'rgba(8,8,8,0.4)'
    }
  }), t)))), /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    style: {
      alignSelf: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow"
  }))), /*#__PURE__*/React.createElement(Card, {
    background: "var(--accent-blue)",
    padding: 32,
    onClick: () => onNav('services'),
    style: {
      gridColumn: '1 / 5',
      gridRow: '4 / 7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    soft: true,
    style: {
      marginBottom: 'auto'
    }
  }, "Service"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(1.25rem,2.5vw,2rem)',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: '#fff',
      margin: '24px 0 12px'
    }
  }, "UI/UX", /*#__PURE__*/React.createElement("br", null), "Design"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginBottom: 16
    }
  }, ['Wireframes & Prototypes', 'Design Systems', 'User Research'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "\u2192 ", t))), /*#__PURE__*/React.createElement(IconButton, {
    variant: "subtle",
    style: {
      alignSelf: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    interactive: true,
    style: {
      gridColumn: '5 / 9',
      gridRow: '4 / 7',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 150,
      background: 'linear-gradient(135deg,#061a12 0%,#0d3d2a 60%,#061a12 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(1.5rem,3.5vw,2.5rem)',
      letterSpacing: '-0.03em',
      color: 'rgba(16,185,129,0.4)'
    }
  }, "HealthCare"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['Admin Panel', 'Dashboard'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: 'rgba(16,185,129,0.1)',
      border: '1px solid rgba(16,185,129,0.2)',
      borderRadius: 999,
      padding: '3px 10px',
      fontSize: '0.6875rem',
      color: 'rgba(16,185,129,0.65)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6875rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: 3
    }
  }, "React \xB7 JavaScript"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.0625rem',
      letterSpacing: '-0.03em'
    }
  }, "HealthCare Admin")), /*#__PURE__*/React.createElement(IconButton, {
    variant: "subtle"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      gridColumn: '9 / 13',
      gridRow: '4 / 7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cardLabel
  }, "My toolkit"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6875rem',
      color: 'var(--text-muted)'
    }
  }, "10+ tools")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.375rem',
      letterSpacing: '-0.03em',
      marginBottom: 16
    }
  }, "Tech Stack"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Design', 'var(--accent-blue)', ['Figma', 'Framer', 'Canva']], ['Frontend', 'var(--accent-orange)', ['React', 'Next.js', 'TypeScript', 'Tailwind']], ['Animation', 'var(--accent-purple)', ['GSAP', 'Framer Motion', 'CSS']]].map(([label, col, tools]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.625rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: col,
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, tools.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t
  }, t)))))))));
}
function ServicesPreview({
  onNav
}) {
  const cards = [{
    n: '01',
    t: 'UX/UI Design',
    ic: 'grid',
    bg: 'var(--accent-blue)',
    d: 'User research, wireframing, prototyping and pixel-perfect UI design.',
    list: ['User Research & Strategy', 'Wireframes & Prototypes', 'Design Systems']
  }, {
    n: '02',
    t: 'Frontend Development',
    ic: 'code',
    bg: 'var(--accent-orange)',
    d: 'Converting designs into high-performance, accessible frontend codebases.',
    list: ['React / Next.js', 'TypeScript & Tailwind', 'Animation & Interaction']
  }, {
    n: '03',
    t: 'Art Direction',
    ic: 'info',
    bg: 'var(--accent-purple)',
    d: 'Visual identity, brand strategy, and art direction for digital products.',
    list: ['Visual Identity', 'Brand Guidelines', 'Motion & Micro-interactions']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 40px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "What I offer",
    title: "Services",
    link: "All services",
    onLink: () => onNav('services')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: c.n
  }, c)))));
}
function ServiceCard({
  n,
  t,
  ic,
  bg,
  d,
  list
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: bg,
      borderRadius: 24,
      padding: 40,
      transition: `all ${EASE}`,
      transform: h ? 'translateY(-4px)' : 'none',
      filter: h ? 'brightness(1.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '0.75rem',
      fontWeight: 700,
      color: 'rgba(255,255,255,0.3)',
      letterSpacing: '0.12em',
      marginBottom: 40
    }
  }, n), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 48,
    stroke: 1.5,
    style: {
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(1.25rem,2vw,1.75rem)',
      letterSpacing: '-0.03em',
      color: '#fff',
      lineHeight: 1.1
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'rgba(255,255,255,0.65)',
      lineHeight: 1.7,
      margin: '0 0 28px'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, list.map(li => /*#__PURE__*/React.createElement("div", {
    key: li,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.8125rem',
      color: 'rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.4)'
    }
  }), li))));
}
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(Bento, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(ServicesPreview, {
    onNav: onNav
  }));
}
Object.assign(window, {
  HomeScreen,
  ServiceCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ServicesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Services screen — page header + service cards + process steps */

function ServicesScreen({
  onNav
}) {
  const cards = [{
    n: '01',
    t: 'UX/UI Design',
    ic: 'grid',
    bg: 'var(--accent-blue)',
    d: 'User research, wireframing, prototyping and pixel-perfect UI design. Every decision grounded in user needs.',
    list: ['User Research & Strategy', 'Wireframes & Prototypes', 'Design Systems', 'Usability Testing']
  }, {
    n: '02',
    t: 'Frontend Development',
    ic: 'code',
    bg: 'var(--accent-orange)',
    d: 'Converting designs into high-performance, accessible, and maintainable frontend codebases.',
    list: ['React / Next.js', 'TypeScript & Tailwind', 'Animation & Interaction', 'Performance Optimization']
  }, {
    n: '03',
    t: 'Art Direction',
    ic: 'info',
    bg: 'var(--accent-purple)',
    d: 'Visual identity, brand strategy, and art direction for digital products that need a strong point of view.',
    list: ['Visual Identity', 'Brand Guidelines', 'Motion & Micro-interactions', 'Creative Concepting']
  }];
  const process = [['01', 'Discovery', 'Deep dive into your goals, users, and constraints. I ask hard questions early so we build the right thing.'], ['02', 'Strategy', 'Define the information architecture, user flows, and design principles before a single pixel is placed.'], ['03', 'Design', 'Wireframes → high-fidelity mockups → interactive prototypes. Iterate quickly with real feedback.'], ['04', 'Build', 'Clean, semantic, performant code that brings the design to life exactly as intended.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    tag: "What I offer",
    title: "Services",
    sub: "From first sketch to shipped product \u2014 design and development under one roof, so nothing gets lost in handoff."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 80px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: c.n
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 100px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "How I work",
    title: "The",
    dim: "process"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      border: '1px solid var(--border)',
      borderRadius: 24,
      overflow: 'hidden'
    }
  }, process.map(([n, t, d], i) => /*#__PURE__*/React.createElement(ProcessStep, {
    key: n,
    n: n,
    t: t,
    d: d,
    last: i === process.length - 1
  })))));
}
function ProcessStep({
  n,
  t,
  d,
  last
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: '40px 32px',
      borderRight: last ? 'none' : '1px solid var(--border)',
      background: h ? 'var(--bg-elevated)' : 'transparent',
      transition: `background ${EASE}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '3rem',
      letterSpacing: '-0.05em',
      color: 'var(--border-light)',
      display: 'block',
      marginBottom: 16
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.125rem'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: 0
    }
  }, d));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Work screen — page header + featured work grid */

function PageHeader({
  tag,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '140px 40px 70px',
      maxWidth: 1400,
      margin: '0 auto 60px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16,
      display: 'flex'
    }
  }, tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(3rem,8vw,6rem)',
      letterSpacing: '-0.04em',
      lineHeight: 0.9
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.125rem',
      color: 'var(--text-secondary)',
      maxWidth: 540,
      lineHeight: 1.7,
      margin: 0
    }
  }, sub));
}
function WorkCard({
  featured,
  label,
  grad,
  tags,
  title,
  desc,
  meta
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderColor: h ? 'var(--border-light)' : 'var(--border)',
      borderRadius: 24,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: `all ${EASE}`,
      transform: h ? 'translateY(-4px)' : 'none',
      gridColumn: featured ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: featured ? '21/9' : '16/9',
      background: grad,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(2rem,6vw,4.5rem)',
      letterSpacing: '-0.04em',
      opacity: 0.15,
      color: '#fff'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top,rgba(8,8,8,0.8) 0%,transparent 60%)',
      opacity: h ? 1 : 0,
      transition: `opacity ${EASE}`,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '0.875rem',
      color: 'var(--text-primary)'
    }
  }, "View on GitHub ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 16
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(1.25rem,2.5vw,1.75rem)',
      letterSpacing: '-0.03em',
      color: h ? 'var(--accent-orange)' : 'var(--text-primary)',
      transition: `color ${EASE}`
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingTop: 20,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, "View project ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14
  })))));
}
function WorkScreen() {
  const items = [{
    featured: true,
    label: 'HealthCare Admin',
    grad: 'linear-gradient(135deg,#1a1030 0%,#2d1b69 50%,#0f0620 100%)',
    tags: ['Admin Dashboard', 'JavaScript', 'UI/UX', 'Featured'],
    title: 'HealthCare Admin Panel',
    desc: 'A comprehensive healthcare administration dashboard featuring patient management, appointment scheduling, analytics modules, and a clean medical UI — designed for real clinical workflows and efficiency.',
    meta: '2025 — Featured Project'
  }, {
    label: 'PRIME',
    grad: 'linear-gradient(135deg,#0a1628 0%,#1a3a5c 50%,#0d2137 100%)',
    tags: ['Admin Dashboard', 'JavaScript'],
    title: 'Prime Panel Admin Dashboard',
    desc: 'Premium multi-purpose admin control panel with dark theme, data tables, charts, and modular UI components for SaaS applications.',
    meta: '2025 — Admin UI'
  }, {
    label: 'TENNIXA',
    grad: 'linear-gradient(135deg,#1a0a00 0%,#3d1f00 50%,#1a0a00 100%)',
    tags: ['React Template', 'Sports'],
    title: 'Tennixa React Template',
    desc: 'Tennis sports website React template with tournament listings, player profiles, live scores section, and a dynamic athletic visual identity.',
    meta: '2025 — Sports'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    tag: "Portfolio",
    title: "Selected work",
    sub: "A selection of admin dashboards, React templates and product interfaces \u2014 built with clean, maintainable code and premium design quality."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 100px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(WorkCard, _extends({
    key: i
  }, it))))));
}
Object.assign(window, {
  PageHeader,
  WorkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================
   Portfolio UI Kit — shared presentational
   primitives, chrome (nav/footer) and icons.
   Self-contained; styled with design tokens.
   Exposed on window for the screen files.
   ============================================ */

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

/* ---- Icons (Feather/Lucide style, matching the source) ---- */
function Icon({
  name,
  size = 16,
  stroke = 2,
  fill = 'none',
  style
}) {
  const p = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill,
    stroke: fill === 'none' ? 'currentColor' : 'none',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  };
  const paths = {
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 7 17 7 17 17"
    })),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "21"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    })),
    code: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "16 18 22 12 16 6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8 6 2 12 8 18"
    })),
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    })),
    check: /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })
  };
  const fills = {
    github: /*#__PURE__*/React.createElement("path", {
      d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
    }),
    linkedin: /*#__PURE__*/React.createElement("path", {
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    })
  };
  if (fills[name]) return /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "currentColor",
    stroke: "none"
  }), fills[name]);
  return /*#__PURE__*/React.createElement("svg", p, paths[name]);
}

/* ---- Eyebrow ---- */
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.6875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-muted)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 1,
      background: 'currentColor'
    }
  }), children);
}

/* ---- Tag ---- */
function Tag({
  children,
  soft,
  tone,
  style
}) {
  const base = soft ? tone === 'dark' ? {
    background: 'rgba(8,8,8,0.15)',
    color: 'rgba(8,8,8,0.6)'
  } : {
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.7)'
  } : {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border)',
    color: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 999,
      padding: '4px 12px',
      fontSize: '0.6875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      whiteSpace: 'nowrap',
      ...base,
      ...style
    }
  }, children);
}

/* ---- Chip ---- */
function Chip({
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--bg-surface)',
      border: `1px solid ${h ? 'var(--border-light)' : 'var(--border)'}`,
      borderRadius: 999,
      padding: '6px 14px',
      fontSize: '0.75rem',
      fontWeight: 500,
      color: h ? 'var(--text-primary)' : 'var(--text-secondary)',
      transition: `all ${EASE}`
    }
  }, children);
}

/* ---- Badge ---- */
function Badge({
  children,
  dotColor = 'var(--accent-green)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderRadius: 999,
      padding: '8px 16px',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dotColor,
      animation: 'ds-pulse 2s ease infinite'
    }
  }), children);
}

/* ---- Button ---- */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.8125rem'
    },
    md: {
      padding: '12px 24px',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '1rem'
    }
  };
  const v = {
    primary: {
      base: {
        background: 'var(--text-primary)',
        color: 'var(--bg)',
        border: '1px solid transparent'
      },
      h: {
        background: 'var(--accent-orange)',
        color: '#fff'
      }
    },
    outline: {
      base: {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)'
      },
      h: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-light)'
      }
    },
    accent: {
      base: {
        background: 'var(--accent-orange)',
        color: '#fff',
        border: '1px solid transparent'
      },
      h: {
        filter: 'brightness(1.08)'
      }
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 999,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: `all ${EASE}`,
      ...sizes[size],
      ...v.base,
      ...(h ? v.h : {}),
      ...style
    }
  }, children, icon);
}

/* ---- IconButton (card arrow) ---- */
function IconButton({
  children,
  variant = 'subtle',
  size = 40,
  style
}) {
  const [h, setH] = React.useState(false);
  const v = {
    subtle: {
      base: {
        background: 'rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.7)'
      },
      h: {
        background: 'rgba(255,255,255,0.2)',
        color: 'var(--text-primary)',
        transform: 'translate(3px,-3px)'
      }
    },
    dark: {
      base: {
        background: 'rgba(8,8,8,0.15)',
        color: 'rgba(8,8,8,0.6)'
      },
      h: {
        background: 'rgba(8,8,8,0.25)',
        color: 'var(--bg)',
        transform: 'translate(3px,-3px)'
      }
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      transition: `all ${EASE}`,
      ...v.base,
      ...(h ? v.h : {}),
      ...style
    }
  }, children);
}

/* ---- StatBlock ---- */
function StatBlock({
  value,
  label,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(1.75rem,3vw,2.25rem)',
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: accent ? 'var(--accent-orange)' : 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6875rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginTop: 6
    }
  }, label));
}

/* ---- Avatar ---- */
function Avatar({
  initials,
  size = 44,
  gradient,
  color
}) {
  const bg = gradient ? 'linear-gradient(135deg, var(--accent-orange), var(--accent-purple))' : color || 'var(--bg-elevated)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      border: gradient || color ? 'none' : '1px solid var(--border)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: size * 0.34,
      color: gradient ? '#fff' : 'var(--text-primary)',
      flexShrink: 0
    }
  }, initials);
}

/* ---- Card ---- */
function Card({
  children,
  background = 'var(--bg-card)',
  padding = 32,
  radius = 24,
  orb,
  grid,
  interactive = true,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background,
      border: '1px solid var(--border)',
      borderColor: interactive && h ? 'var(--border-light)' : 'var(--border)',
      borderRadius: radius,
      padding,
      transition: `border-color ${EASE}, transform ${EASE}`,
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, grid && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
      backgroundSize: '60px 60px'
    }
  }), orb && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: orb.size || 240,
      height: orb.size || 240,
      top: orb.y ?? -60,
      right: orb.x ?? -40,
      borderRadius: '50%',
      background: orb.color || 'var(--accent-orange)',
      filter: 'blur(60px)',
      opacity: orb.opacity ?? 0.2,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      height: '100%'
    }
  }, children));
}

/* ---- SectionHeader ---- */
function SectionHeader({
  eyebrow,
  title,
  dim,
  link,
  onLink
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12,
      display: 'flex'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(2rem,5vw,3.5rem)',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, title, " ", dim && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, dim))), link && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 15
    }),
    onClick: onLink
  }, link));
}

/* ---- Footer ---- */
function Footer() {
  const link = {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    cursor: 'pointer'
  };
  const h4 = {
    fontSize: '0.6875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--text-muted)',
    marginBottom: 18
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      padding: '60px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 60,
      paddingBottom: 60,
      borderBottom: '1px solid var(--border)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.5rem',
      letterSpacing: '-0.03em',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, "Dushyant", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-orange)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, "UI/UX Designer & Frontend Developer crafting premium digital experiences.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h4
  }, "Navigation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Work"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Services"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "About"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h4
  }, "Social"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: link
  }, "GitHub"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "LinkedIn"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Instagram"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h4
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: link
  }, "dush8387@gmail.com"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Hire me"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Download CV")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2025 Dushyant Prajapat. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-muted)'
    }
  }, "Designed & built with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-orange)'
    }
  }, "\u2665"), " in India"))));
}

/* ---- Nav ---- */
function Nav({
  active,
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const items = ['Work', 'Services', 'About'];
  const navLink = label => {
    const isActive = active === label.toLowerCase();
    return /*#__PURE__*/React.createElement("span", {
      key: label,
      onClick: () => onNav(label.toLowerCase()),
      style: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
        cursor: 'pointer',
        transition: `color ${EASE}`
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("nav", {
    onMouseEnter: () => setScrolled(true),
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0 40px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(8,8,8,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('home'),
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: '1.25rem',
      letterSpacing: '-0.03em',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, "Dushyant", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-orange)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, items.map(navLink), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('contact'),
    style: {
      padding: '10px 20px'
    }
  }, "Get in touch")));
}
Object.assign(window, {
  Icon,
  Eyebrow,
  Tag,
  Chip,
  Badge,
  Button,
  IconButton,
  StatBlock,
  Avatar,
  Card,
  SectionHeader,
  Footer,
  Nav,
  EASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MarqueeRow = __ds_scope.MarqueeRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
