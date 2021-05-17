local t = {
	-- insert table entries here
	CARDTYPE_TAROT = 0,				-- Tarot cards
	CARDTYPE_SUIT = 1,				-- Standard playing cards (twos, aces and Joker, does not include Suicide King, Rules Card or Queen of Hearts)
	CARDTYPE_RUNE = 2,				-- Runes
	CARDTYPE_SPECIAL	= 3,		-- Special cards (anything that doesn't fall in the above categories excludes non-cards such as Dice Shard, see below)
	CARDTYPE_SPECIAL_OBJECT = 4,	-- Special pocket items that do not qualify as "cards"
	CARDTYPE_TAROT_REVERSE = 5, 	-- Reversed tarot cards
}

local ct = {}
for k,v in pairs(t) do
    table.insert(ct,{k,v})
end
table.sort(ct, function(a,b) return a[2]<b[2] end)

for k,v in ipairs(ct) do
print('|[ ](#){: .rep .tooltip .badge }|'..v[2]..' |'..v[1]..' {: .copyable } |  | ')    
end