const setTheme = (currentTheme) => {
    // console.log(currentTheme);
    // console.log(document.styleSheets);

    const selectedCssProps = Array.from(document.styleSheets)
        .reduce((prevStyleSheet, currStyleSheet) =>
            (prevStyleSheet =
                    [
                        ...prevStyleSheet,
                        ...Array.from(currStyleSheet.cssRules)
                            .reduce((prevCssRule, currCssRule) => {
                                // console.log(prevCssRules, currCssRules);
                                prevCssRule = currCssRule.selectorText === ':root'
                                    ?
                                    [
                                        ...prevCssRule,
                                        ...Array.from(currCssRule.style).filter((item) => item.startsWith('--selected'))
                                    ]
                                    : prevCssRule;

                                return prevCssRule
                            }, []
                        ),
                    ]
            ), []
        );
    selectedCssProps.forEach((value) => {
        document.documentElement.style.setProperty(value, `var(--${currentTheme}${value.substring(10)})`);
        // console.log(value, `var(--${currentTheme}${value.substring(10)})`)
    });
    // console.log(selectedCssProps);
};

export default setTheme;