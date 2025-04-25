import { jsx as r, jsxs as $ } from "react/jsx-runtime";
import { createIcon as q, forwardRef as H, omitThemingProps as ne, useColorModeValue as re, useMediaQuery as ie, useMultiStyleConfig as ce, chakra as _, Flex as G, Spinner as se, Collapse as ae } from "@chakra-ui/react";
import * as C from "react";
import D from "react";
import { dataAttr as x } from "@chakra-ui/utils";
import { mode as M, anatomy as le } from "@chakra-ui/theme-tools";
import { motion as Z, AnimatePresence as de } from "framer-motion";
import { createIcon as pe } from "@chakra-ui/icon";
import { createContext as he } from "@chakra-ui/react-context";
import { cx as ue } from "@chakra-ui/shared-utils";
import { createMultiStyleConfigHelpers as me } from "@chakra-ui/styled-system";
const J = C.createContext({
  activeStep: 0
}), N = () => C.useContext(J), ge = ({
  value: e,
  children: o
}) => {
  const t = e.state === "error", n = e.state === "loading";
  return r(J.Provider, {
    value: {
      ...e,
      isError: t,
      isLoading: n
    },
    children: o
  });
}, fe = q({
  viewBox: "0 0 14 14",
  path: r("g", {
    fill: "currentColor",
    children: r("polygon", {
      points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    })
  })
});
q({
  displayName: "CloseIcon",
  d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
});
const Ce = pe({
  d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
  displayName: "WarningIcon"
}), [xe, be] = he({
  name: "StepsStyleContext",
  errorMessage: `useStepsStyles returned 'undefined'. Seems you forgot to wrap the components in "<Steps />" `
}), j = be, Se = H((e, o) => {
  const {
    className: t,
    activeStep: n,
    children: i,
    orientation: s,
    state: a,
    responsive: c,
    checkIcon: u,
    errorIcon: b,
    onClickStep: l,
    mobileBreakpoint: S,
    trackColor: d,
    expandVerticalSteps: p = !1,
    ...v
  } = ne(e), m = d || re("gray.200", "gray.700"), g = C.Children.toArray(i), f = g.length, L = () => n <= g.length ? C.Children.map(g[n], (h) => {
    if (C.isValidElement(h))
      return C.Children.map(h.props.children, (I) => I);
  }) : null, [k] = ie(`(max-width: ${S || "768px"})`), E = !!l, w = k && c ? "vertical" : s, y = w === "vertical", z = ce("Steps", {
    ...e,
    orientation: w,
    stepCount: f,
    isVertical: y,
    trackColor: m
  }), W = {
    ...z.root
  };
  return r(xe, {
    value: z,
    children: $(ge, {
      value: {
        activeStep: n,
        orientation: w,
        state: a,
        responsive: c,
        checkIcon: u,
        errorIcon: b,
        onClickStep: l,
        clickable: E,
        colorScheme: e.colorScheme,
        stepCount: f,
        trackColor: m,
        isVertical: y,
        variant: e.variant || "circles",
        expandVerticalSteps: p
      },
      children: [r(_.div, {
        ref: o,
        __css: {
          justifyContent: f === 1 ? "flex-end" : "space-between",
          flexDir: w === "vertical" ? "column" : "row",
          ...W
        },
        className: ue("cui-steps", t),
        ...v,
        children: C.Children.map(i, (h, I) => {
          const V = (C.isValidElement(h) && h.props.isCompletedStep) ?? I < n, R = I === f - 1, oe = {
            index: I,
            isCompletedStep: V,
            isCurrentStep: I === n,
            isLastStep: R
          };
          return C.isValidElement(h) ? C.cloneElement(h, oe) : null;
        })
      }), w === "horizontal" && L()]
    })
  });
});
Se.defaultProps = {
  activeStep: 0,
  colorScheme: "green",
  orientation: "horizontal",
  responsive: !0
};
const B = Z(G), T = Z(Ce), ve = Z(_.span), P = {
  transition: {
    duration: 0.25
  },
  exit: {
    scale: 0.5,
    opacity: 0
  },
  initial: {
    scale: 0.5,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  }
}, O = H((e, o) => {
  const {
    icon: t,
    iconLabel: n,
    label: i
  } = j(), {
    isCompletedStep: s,
    isCurrentStep: a,
    isError: c,
    isLoading: u,
    isKeepError: b,
    icon: l,
    index: S,
    checkIcon: d,
    errorIcon: p
  } = e, v = {
    fontWeight: "medium",
    color: M("gray.900", "gray.100")(e),
    textAlign: "center",
    fontSize: "md",
    ...i
  }, m = D.useMemo(() => l || null, [l]), g = D.useMemo(() => p || null, [p]), f = D.useMemo(() => d || fe, [d]);
  return D.useMemo(() => {
    if (s)
      return c && b ? r(T, {
        ...P,
        style: t
      }, "icon") : r(B, {
        ...P,
        children: r(f, {
          color: "white",
          style: t
        })
      }, "check-icon");
    if (a) {
      if (c && g)
        return r(B, {
          ...P,
          children: r(g, {
            color: "white",
            style: t
          })
        }, "error-icon");
      if (c)
        return r(T, {
          ...P,
          style: t
        }, "icon");
      if (u)
        return r(se, {
          width: t.width,
          height: t.height
        });
    }
    return m ? r(B, {
      ...P,
      children: r(m, {
        style: t
      })
    }, "step-icon") : r(ve, {
      ref: o,
      style: n,
      __css: v,
      ...P,
      children: (S || 0) + 1
    }, "label");
  }, [s, a, c, u, m, t]);
}), U = ({
  isCurrentStep: e,
  isCompletedStep: o,
  children: t,
  isError: n,
  isLoading: i
}) => {
  const {
    stepIconContainer: s
  } = j(), {
    clickable: a,
    isLoading: c
  } = N(), u = i || c;
  return r(_.div, {
    __css: s,
    className: "cui-steps__step-icon-container",
    "aria-current": e ? "step" : void 0,
    "data-invalid": x(n && (e || o)),
    "data-active": x(o),
    "data-clickable": x(a),
    "data-loading": x(u && (e || o)),
    children: r(de, {
      mode: "wait",
      children: t
    })
  });
}, X = ({
  isCurrentStep: e,
  opacity: o,
  label: t,
  description: n
}) => {
  const {
    labelContainer: i,
    label: s,
    description: a
  } = j();
  return !!t || !!n ? $(_.div, {
    "aria-current": e ? "step" : void 0,
    __css: i,
    children: [!!t && r(_.span, {
      __css: {
        opacity: o,
        ...s
      },
      children: t
    }), !!n && r(_.span, {
      __css: {
        opacity: o,
        ...a
      },
      children: n
    })]
  }) : null;
}, ye = C.forwardRef((e, o) => {
  const {
    step: t,
    stepContainer: n
  } = j(), {
    isError: i,
    isLoading: s,
    onClickStep: a,
    variant: c,
    clickable: u,
    checkIcon: b,
    errorIcon: l
  } = N(), {
    index: S,
    isCompletedStep: d,
    isCurrentStep: p,
    hasVisited: v,
    icon: m,
    label: g,
    description: f,
    isKeepError: L,
    state: k,
    checkIcon: E,
    errorIcon: w
  } = e, y = s || k === "loading", z = i || k === "error", W = v ? 1 : 0.8, h = c === "simple" ? d || p : d, I = E || b, V = w || l;
  return r(_.div, {
    "aria-disabled": !v,
    className: "cui-steps__horizontal-step",
    "data-active": x(h),
    "data-invalid": x(z),
    "data-clickable": x(u),
    onClick: () => a == null ? void 0 : a(S || 0),
    ref: o,
    __css: t,
    children: $(_.div, {
      className: "cui-steps__horizontal-step-container",
      __css: n,
      children: [r(U, {
        ...e,
        isError: z,
        isLoading: y,
        children: r(O, {
          index: S,
          isCompletedStep: d,
          isCurrentStep: p,
          isError: z,
          isKeepError: L,
          isLoading: y,
          icon: m,
          checkIcon: I,
          errorIcon: V
        })
      }), r(X, {
        label: g,
        description: f,
        isCurrentStep: p,
        opacity: W
      })]
    })
  });
}), Ie = D.forwardRef((e, o) => {
  const {
    children: t,
    index: n,
    isCompletedStep: i,
    isCurrentStep: s,
    label: a,
    description: c,
    icon: u,
    hasVisited: b,
    state: l,
    checkIcon: S,
    errorIcon: d
  } = e, {
    checkIcon: p,
    errorIcon: v,
    isError: m,
    isLoading: g,
    variant: f,
    onClickStep: L,
    clickable: k,
    expandVerticalSteps: E
  } = N(), {
    step: w,
    stepIconContainer: y
  } = j(), z = b ? 1 : 0.8, W = g || l === "loading", h = m || l === "error", I = f === "simple" ? i || s : i, V = S || p, R = d || v, K = () => E ? t : r(ae, {
    style: {
      width: "100%"
    },
    in: s,
    children: (s || i) && t
  });
  return $(_.div, {
    ref: o,
    className: "cui-steps__vertical-step",
    "data-active": x(I),
    "data-clickable": x(k),
    "data-invalid": x(h),
    onClick: () => L == null ? void 0 : L(n || 0),
    __css: w,
    children: [$(G, {
      "data-vertical": x(!0),
      className: "cui-steps__vertical-step-container",
      children: [r(U, {
        isLoading: W,
        isError: h,
        ...e,
        children: r(O, {
          index: n,
          isError: h,
          isLoading: W,
          isCurrentStep: s,
          isCompletedStep: i,
          icon: u,
          checkIcon: V,
          errorIcon: R
        })
      }), r(X, {
        label: a,
        description: c,
        isCurrentStep: s,
        opacity: z
      })]
    }), r(_.div, {
      className: "cui-steps__vertical-step-content",
      __css: {
        minH: "8px",
        paddingStart: y != null && y.width ? `calc(${y.width})` : 0
      },
      children: K()
    })]
  });
}), Ge = H((e, o) => {
  const {
    children: t,
    description: n,
    icon: i,
    state: s,
    checkIcon: a,
    errorIcon: c,
    index: u,
    isCompletedStep: b,
    isCurrentStep: l,
    isLastStep: S,
    isKeepError: d,
    label: p
  } = e, {
    isVertical: v,
    isError: m,
    isLoading: g,
    clickable: f
  } = N(), k = {
    isLastStep: S,
    isCompletedStep: b,
    isCurrentStep: l,
    index: u,
    isError: m,
    isLoading: g,
    clickable: f,
    label: p,
    description: n,
    hasVisited: l || b,
    icon: i,
    isKeepError: d,
    checkIcon: a,
    state: s,
    errorIcon: c
  };
  return (() => {
    switch (v) {
      case !0:
        return r(Ie, {
          ref: o,
          ...k,
          children: t
        });
      default:
        return r(ye, {
          ref: o,
          ...k
        });
    }
  })();
});
function Je({ initialStep: e }) {
  const [o, t] = C.useState(e);
  return { nextStep: () => {
    t((c) => c + 1);
  }, prevStep: () => {
    t((c) => c - 1);
  }, reset: () => {
    t(e);
  }, setStep: (c) => {
    t(c);
  }, activeStep: o };
}
const Y = ({ colorScheme: e, trackColor: o, clickable: t }) => ({
  display: "flex",
  alignItems: "center",
  "&:not(:last-child)": {
    flex: 1
  },
  "&:not(:last-child):after": {
    content: '""',
    flex: 1,
    height: "2px",
    backgroundColor: `${o}`,
    mx: 3,
    transition: "background-color .2s ease"
  },
  _active: {
    "&:not(:last-child):after": {
      backgroundColor: `${e}.500`,
      backgroundPosition: "left",
      transition: "background-position .2s ease-in-out"
    }
  },
  _hover: {
    cursor: t ? "pointer" : "default"
  }
}), _e = ({ colorScheme: e, trackColor: o, clickable: t, inactiveColor: n, stepHeight: i }) => ({
  ...Y({ colorScheme: e, trackColor: o, clickable: t }),
  justifyContent: "flex-start",
  flexDirection: "column",
  flex: 1,
  "&:not(:last-child):after": {
    content: '""',
    backgroundColor: o || n,
    height: "2px",
    order: -1,
    insetInline: "50%",
    position: "relative",
    top: `calc(${i} / 2)`,
    transition: "background-color .2s ease",
    width: `calc(100% - ${i} - calc(8px * 2))`
  }
}), ee = ({ stepHeight: e, colorScheme: o, trackColor: t, clickable: n }) => ({
  position: "relative",
  gap: 4,
  pb: 4,
  display: "flex",
  flexDir: "column",
  "--size": e,
  "--gap": "8px",
  _active: {
    pb: 4,
    "&:not(:last-child):after": {
      backgroundColor: `${o}.500`,
      backgroundPosition: "left",
      transition: "background-position .2s ease-in-out"
    }
  },
  "&:not(:last-child):after": {
    content: '""',
    backgroundColor: t,
    bottom: "var(--gap)",
    insetInline: "calc(var(--size) / 2)",
    position: "absolute",
    top: "calc(var(--size) + var(--gap))",
    width: "2px"
  },
  _hover: {
    cursor: n ? "pointer" : "default"
  }
}), te = ({ inactiveColor: e, activeColor: o }) => ({
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  bg: e,
  borderColor: e,
  _activeStep: {
    borderColor: o,
    _invalid: {
      bg: "red.400",
      borderColor: "red.400"
    }
  },
  _active: {
    bg: o,
    borderColor: o,
    _invalid: {
      bg: "red.400",
      borderColor: "red.400"
    }
  },
  "&[data-clickable]:hover": {
    borderColor: o,
    cursor: "pointer"
  }
}), ke = le("steps").parts("description", "icon", "iconLabel", "label", "labelContainer", "step", "stepContainer", "stepIconContainer", "root"), { defineMultiStyleConfig: we, definePartsStyle: A } = me(ke.keys), Le = {
  strokeWidth: "2px"
}, Q = (e) => ({
  color: M("gray.900", "gray.100")(e),
  textAlign: "center",
  fontSize: "md",
  fontWeight: "bold"
}), ze = (e) => ({
  color: M("gray.800", "gray.200")(e),
  mt: "-2px",
  textAlign: "center",
  fontSize: "sm"
}), Ae = ({ stepCount: e, orientation: o }) => ({
  justifyContent: e === 1 ? "flex-end" : "space-between",
  flexDir: o === "vertical" ? "column" : "row",
  fontFamily: "heading",
  textAlign: "center",
  width: "100%",
  display: "flex",
  flex: 1,
  flexWrap: "wrap"
}), Ee = () => ({
  display: "flex",
  alignItems: "center"
}), We = {
  display: "flex",
  position: "relative"
}, Pe = () => ({
  display: "flex",
  flexDir: "column",
  justifyContent: "center"
}), Me = A((e) => ({
  description: ze(e),
  icon: Le,
  iconLabel: Q(e),
  label: Q(e),
  labelContainer: Pe(),
  step: We,
  stepContainer: Ee(),
  root: Ae(e)
})), F = {
  sm: A({
    stepIconContainer: {
      width: "32px",
      height: "32px",
      borderWidth: "2px"
    },
    icon: {
      width: "14px",
      height: "14px"
    },
    label: {
      fontWeight: "medium",
      textAlign: "center",
      fontSize: "sm"
    },
    description: {
      fontWeight: "300",
      textAlign: "center",
      fontSize: "xs"
    }
  }),
  md: A({
    stepIconContainer: {
      width: "40px",
      height: "40px",
      borderWidth: "2px"
    },
    icon: {
      width: "18px",
      height: "18px"
    },
    label: {
      fontWeight: "medium",
      textAlign: "center",
      fontSize: "md"
    },
    description: {
      fontWeight: "300",
      textAlign: "center",
      fontSize: "sm"
    }
  }),
  lg: A({
    stepIconContainer: {
      width: "48px",
      height: "48px",
      borderWidth: "2px"
    },
    icon: {
      width: "22px",
      height: "22px"
    },
    label: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "lg"
    },
    description: {
      fontWeight: "300",
      textAlign: "center",
      fontSize: "md"
    }
  })
}, Ve = A((e) => {
  const { colorScheme: o } = e, t = M("gray.200", "gray.700")(e), n = `${o}.500`, i = F[e.size].stepIconContainer.height;
  return {
    stepIconContainer: te({
      inactiveColor: t,
      activeColor: n
    }),
    labelContainer: {
      flexDir: "column",
      alignItems: "flex-start",
      ms: 3
    },
    step: e.orientation === "horizontal" ? Y({ ...e, stepHeight: i }) : ee({ ...e, stepHeight: i })
  };
}), De = A((e) => {
  const { colorScheme: o } = e, t = M("gray.200", "gray.700")(e), n = `${o}.500`, i = F[e.size].stepIconContainer.height;
  return {
    stepIconContainer: {
      ...te({
        inactiveColor: t,
        activeColor: n
      }),
      flexDir: "column"
    },
    stepContainer: {
      flexDir: "column"
    },
    labelContainer: {
      flexDir: "column",
      alignItems: e.orientation === "horizontal" ? "center" : "flex-start",
      ms: e.orientation === "horizontal" ? 0 : 3
    },
    step: e.orientation === "horizontal" ? _e({ ...e, stepHeight: i }) : ee({ ...e, stepHeight: i })
  };
}), $e = A((e) => {
  const { colorScheme: o } = e, t = M("gray.200", "gray.700")(e), n = `${o}.500`, i = e.orientation === "vertical";
  return {
    stepIconContainer: {
      opacity: 0,
      pointerEvents: "none",
      borderWidth: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      _loading: {
        opacity: 1,
        pointerEvents: "auto"
      },
      _invalid: {
        opacity: 1,
        pointerEvents: "auto"
      }
    },
    stepContainer: {
      flex: 1,
      py: 2,
      flexDir: "row-reverse",
      alignItems: "center",
      justifyContent: "space-between"
    },
    label: {
      mx: 0,
      fontWeight: "bold"
    },
    labelContainer: {
      flexDir: "column",
      alignItems: "flex-start"
    },
    description: {
      mx: 0
    },
    root: {
      gap: 4
    },
    step: {
      flexDir: "column",
      position: "relative",
      flex: 1,
      borderTopWidth: i ? 0 : 3,
      borderColor: (e == null ? void 0 : e.trackColor) || t,
      "&:not(:last-child):after": {
        display: "none"
      },
      transition: "border-color .2s ease",
      _activeStep: {
        _invalid: {
          borderColor: "red.400",
          "& .cui-steps__vertical-step-container": {
            borderColor: "red.400"
          }
        }
      },
      _active: {
        transition: "border-color .2s ease",
        borderColor: n,
        "& .cui-steps__vertical-step-container": {
          borderColor: n
        },
        _invalid: {
          borderColor: "red.400",
          "& .cui-steps__vertical-step-container": {
            borderColor: "red.400"
          }
        }
      },
      "& .cui-steps__vertical-step-container": {
        borderInlineStartWidth: 3,
        py: 2,
        ps: 3,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        _invalid: {
          borderColor: "red.400",
          "& .cui-steps__vertical-step-container": {
            borderColor: "red.400"
          }
        }
      },
      "& .cui-steps__vertical-step-content": {
        ps: 0,
        py: 0
      },
      "&[data-clickable]:hover": {
        borderColor: n,
        cursor: "pointer",
        "& .cui-steps__vertical-step-container": {
          borderColor: n
        }
      }
    }
  };
}), je = {
  circles: Ve,
  "circles-alt": De,
  simple: $e
}, Oe = we({
  baseStyle: Me,
  sizes: F,
  variants: je,
  defaultProps: {
    size: "md",
    colorScheme: "blue",
    variant: "circles"
  }
});
export {
  Ge as Step,
  Se as Steps,
  Oe as StepsTheme,
  Je as useSteps
};
