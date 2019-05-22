---
label: Component
title: Radio
---

<page-intro>Radio buttons are an essential form control that should be used to represent two or more mutually-exclusive choices. A radio signifies a user _must_ make a choice.</page-intro>

<component
    name="Radio Group"
    component="radio"
    variation="radio"
    >
</component>

<component
    name="Radio Group (RTL)"
    component="radio"
    variation="rtl-radio"
    >
</component>

<component
    name="Radio Pill Group"
    component="radio"
    variation="radio-group"
    >
</component>

<component
    name="Radio Pill Group (RTL)"
    component="radio"
    variation="rtl-radio-group"
    >
</component>

# Best Practices

Source: [Radio Buttons UX Design](https://uxplanet.org/radio-buttons-ux-design-588e5c0a50dc)

## Logical Order For Options

You should list the options in a logical order, such as most likely to be selected to least, simplest operation to most complex, or least risk to most. Alphabetical ordering is not recommended because it is language dependent and therefore not localizable.

## Options Should Be Comprehensive and Clearly Distinct

The biggest usability problems for radio buttons come from labels that are vague, misleading, or describe options that are impossible for average users to understand. Contextual help can alleviate the latter problem, but it’s still best to user test any important set of interaction controls.

## Always Offer a Default Selection

One of the 10 heuristics of UI design says that users should be able to undo (and redo) their actions. This means enabling people to set a UI control back to its original state. In case of radio buttons this means that radio buttons should always have exactly one option pre-selected. Select the safest (to prevent loss of data or system access) and most secure and private option. If safety and security aren’t factors, select the most likely or convenient option.

If users might need to refrain from making a selection, you should provide a radio button for this choice, such as one labeled “None.” Offering users an explicit, neutral option to click is much better than requiring the implicit act of not selecting from the list.
