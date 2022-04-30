-- +---------------+
-- | Benchmark Mod |
-- |   by Zamiel   |
-- +---------------+

-- This is a mod that will benchmark two different functions to calculate how much more efficient
-- one function is over the other.

local mod = RegisterMod("test-benchmark", 1)

-- Benchmark configuration
local NUM_TRIALS = 5000000 -- This is how many times each of the two functions will be executed

-- Variables
local averages = {}
local game = Game()

local function round(a, b)
  return (a - a % b) / b
end

-- ModCallbacks.MC_POST_GAME_STARTED (15)
function mod:PostGameStarted()
  Isaac.DebugString("MC_POST_GAME_STARTED")

  mod:GetAverageTimes()
  mod:CompareAverageTimes()
end

function mod:GetAverageTimes()
  Isaac.DebugString("Performing " .. tostring(NUM_TRIALS) .. " trials.")

  for i = 1, 2 do
    local totalTimeMilliseconds = 0
    for j = 1, NUM_TRIALS do
      local startTimeMilliseconds = Isaac.GetTime()
      if i == 1 then
        mod:Function1()
      elseif i == 2 then
        mod:Function2()
      end
      local endTimeMilliseconds = Isaac.GetTime()
      local elapsedTimeMilliseconds = endTimeMilliseconds - startTimeMilliseconds
      totalTimeMilliseconds = totalTimeMilliseconds + elapsedTimeMilliseconds
    end
    local averageTimeMilliseconds = totalTimeMilliseconds / NUM_TRIALS
    Isaac.DebugString(
      "The average time of function " .. tostring(i) .. " is: "
      .. tostring(averageTimeMilliseconds) .. " milliseconds"
    )
    averages[i] = averageTimeMilliseconds -- Store it for later
  end
end

function mod:CompareAverageTimes()
  local functionDifference = averages[1] - averages[2]
  Isaac.DebugString("The difference is: " .. tostring(functionDifference))
  local percent = functionDifference / averages[1] * 100
  percent = round(percent, 2)
  Isaac.DebugString("This is a difference of " .. tostring(percent) .. "%.")
end

function mod:Function1()
end

function mod:Function2()
end

mod:AddCallback(ModCallbacks.MC_POST_GAME_STARTED, mod.PostGameStarted)
