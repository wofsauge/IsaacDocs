-- +-----------------+
-- | Benchmark Mod 2 |
-- |    by Zamiel    |
-- +-----------------+

-- This is a mod that will benchmark two different functions to calculate how much more efficient
-- one function is over the other.

local socket = require("socket")

local mod = RegisterMod("test-benchmark", 1)

-- Benchmark configuration
local NUM_TRIALS_PER_FUNCTION = 1000
local THRESHOLD_IN_SECONDS = 0.001 -- 1 millisecond

-- Variables
local averages = {}
local game = Game()

-- ModCallbacks.MC_POST_GAME_STARTED (15)
function mod:PostGameStarted()
  Isaac.DebugString("Using a threshold in seconds of: " .. tostring(THRESHOLD_IN_SECONDS))
  local numInvocations = mod:GetNumInvocationsUntil()
  Isaac.DebugString("You would need to execute the slower function " .. tostring(numInvocations) .. " times per frame for it to ever make a difference.")
end

function mod:GetNumInvocationsUntil()
  local totalTimeTaken = 0
  local i = 0
  while true do
    i = i + 1

    local elapsedTimeSeconds1 = mod:GetExecutionTimeInSeconds(mod.Function1)
    Isaac.DebugString("Elapsed time for function 1: " .. tostring(elapsedTimeSeconds1))
    local elapsedTimeSeconds2 = mod:GetExecutionTimeInSeconds(mod.Function2)
    Isaac.DebugString("Elapsed time for function 2: " .. tostring(elapsedTimeSeconds2))

    local difference = elapsedTimeSeconds2 - elapsedTimeSeconds1
    Isaac.DebugString("Difference: " .. tostring(difference))
    totalTimeTaken = totalTimeTaken + difference
    if totalTimeTaken >= NUM_TRIALS_PER_FUNCTION * THRESHOLD_IN_SECONDS then
      return i
    end
  end
end

function mod:GetExecutionTimeInSeconds(func)
  local startTimeSeconds = socket:gettime()
  for i = 1, NUM_TRIALS_PER_FUNCTION do
    func()
  end
  local endTimeSeconds = socket:gettime()

  return endTimeSeconds - startTimeSeconds
end

function mod:Function1()
end

function mod:Function2()
end

mod:AddCallback(ModCallbacks.MC_POST_GAME_STARTED, mod.PostGameStarted)
