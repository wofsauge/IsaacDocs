---
tags:
  - File
---
# ANM2 Files
Those files are used to store animations. You can edit and create them with the official animation editor (available in the tools directory) or with [Anm2ed](https://github.com/ShweetsStuff/anm2ed), see the [corresponding page](https://wofsauge.github.io/IsaacDocs/rep/tutorials/Tool_AnimationEditor.html) for more informations.

Specification: [https://www.reddit.com/r/themoddingofisaac/comments/377a9h/animations_explained/](https://www.reddit.com/r/themoddingofisaac/comments/377a9h/animations_explained/)

## Structure
- `<AnimatedActor>`
    - [`<Info />`](#info-tag)
    - [`<Content>`](#content-tag)
        - `<Spritesheets>`
            - [`<Spritesheet>`](#spritesheets-tag)
        - `<Layers>`
            - [`<Layer />`](#layer-tag)
        - `<Nulls>`
            - [`<Null />`](#null-tag)
        - `<Events>`
            - [`<Event />`](#event-tag)
    - [`<Animations>`](#animations-tag)
        - [`<Animation>`](#animation-tag)
            - [`<RootAnimation>`](#rootanimation-tag)
                - [`<Frame />`](#frame-tag)
            - `<LayerAnimations>`
                - [`<LayerAnimation>`](#layeranimation-tag)
                    - [`<Frame />`](#frame-tag)
            - `<NullAnimations>`
                - [`<NullAnimation>`](#nullanimation-tag)
                    - [`<Frame />`](#frame-tag)
            - `<Triggers>`
                - [`<Trigger />`](#trigger-tag)
## "Info" Tag
General metadata for the file. It is an orphan tag.

| Attribute-Name | Type | Description |
|:--|:--|:--|
| CreatedBy | string ||
| CreatedOn | string | A date in format `M/D/Y h:m:s PM/AM` | <!--220.000_cod worm has periods instead of slashes. -->
| Version | int ||
| Fps | int | The framerate of all animations. |


## "Content" Tag
Contains external references and their corresponding IDs.

???+ bug
    File paths may be capitalized while the actual files are actually in lowercase.

### "Spritesheet" Tag
Pairs a spritesheets with an ID.

| Attribute-Name | Type | Description |
|:--|:--|:--|
| Path | string | File path to the spritesheet, starting from gfx/. |
| Id | int ||

### "Layer" Tag
Pairs a layer with a spritesheet and a name. Tags are ascending order of IDs.

| Attribute-Name | Type | Description |
|:--|:--|:--|
| Name | string ||
| Id | int ||
| SpritesheetId | int ||

### "Null" Tag
Represents another in game object, for example in the "Pickup" animation of Isaac, a null layer is used to move the item Isaac raises above his head.

| Attribute-Name | Type | Description |
|:--|:--|:--|
| Name | string ||
| Id | int ||

### "Event" Tag
Trigger for an ingame action, like a sound or an attack.

| Attribute-Name | Type | Description |
|:--|:--|:--|
| Name | string ||
| Id | int ||


## "Animations" Tag


| Attribute-Name | Type | Description |
|:--|:--|:--|
| DefaultAnimation | string | The default animation's name. <!--When is it played?--> |

### "Animation" Tag


| Attribute-Name | Type | Description |
|:--|:--|:--|
| Name | string | A unique identifier for the animation. |
| FrameNum | int | The maximum duration of the animation (in frames). |
| Loop | bool | Possible values: ["true", "false"] |


#### "RootAnimation" Tag
Transformations to every layers.

#### "LayerAnimation" Tag
Animations per layers, if a layer is not animated, the tag may be orphan. There must be one `<LayerAnimation>` per layer.

| Attribute-Name | Type | Description |
|:--|:--|:--|
| LayerId | int ||
| Visible | bool | Possible values: ["true", "false"] |

#### "NullAnimation" tag
An animation to apply to another object (see [`<Null>`](#null-tag)).

| Attribute-Name | Type | Description |
|:--|:--|:--|
| NullId | int ||
| Visible | bool | Possible values: ["true", "false"] |

#### "Frame" tag


| Attribute-Name | Type | Description |
|:--|:--|:--|
| XPosition | int | Default = 0 |
| YPosition | int | Default = 0 |
| Delay | int  | The frame's duration in frames. |
| Visible | bool | Possible values: ["true", "false"] |
| XScale | int | The sprite's horizontal scale in percent. Negative values flip the sprite. Default = 100 |
| YScale | int | The sprite's vertical scale in percent. Negative values flip the sprite. Default = 100 |
| RedTint | int | Lower values makes the sprite less red ([example](https://imgur.com/EzN7NTU)). Should be between 0 and 255. Default = 255 |
| GreenTint | int | Lower values makes the sprite less green ([example](https://imgur.com/EzN7NTU)). Should be between 0 and 255. Default = 255 |
| BlueTint | int | Lower values makes the sprite less blue ([example](https://imgur.com/EzN7NTU)). Should be between 0 and 255. Default = 255 |
| AlphaTint | int | Sprite's opacity. 255 is totally opaque, 0 is transparent. |
| RedShift | int | Makes the sprite more red ([example](https://imgur.com/llvOzfe)). Should be between 0 and 255. Defalut = 0 |
| GreenShift | int | Makes the sprite more green ([example](https://imgur.com/llvOzfe)). Should be between 0 and 255. Defalut = 0 |
| BlueShift | int | Makes the sprite more blue ([example](https://imgur.com/llvOzfe)). Should be between 0 and 255. Defalut = 0 |
| Rotation | int | Rotates the sprite clockwise. The value is in degrees. |
| Interpolated | bool | If set to true, the game will transition between values. |

If the tag is child of `<LayerAnimation>` it may provide more attributes:
| Attribute-Name | Type | Description |
|:--|:--|:--|
| XPivot | int | Sets a x coordinate for a "pin" where the layer can be rotated arround |
| YPivot | int | Sets a y coordinate for a "pin" where the layer can be rotated arround |
| XCrop | int | The x coordinate of the crop rectangle's top left vertex in the spritesheet. |
| YCrop | int | The y coordinate of the crop rectangle's top left vertex in the spritesheet. |
| Width | int | The width of the crop rectangle. |
| Height | int | The heigth of the crop rectangle. |


#### "Triggers" Tag
Triggers for [events](#event-tag). This tag may be orphan.

##### "Trigger" Tag
| Attribute-Name | Type | Description |
|:--|:--|:--|
| EventId | int ||
| AtFrame | int ||