$categories = [ordered]@{
  "casino without documents" = @(
    @{ slug = "casino-without-documents"; name = "casino without documents" },
    @{ slug = "no-document-casino"; name = "no document casino" },
    @{ slug = "casino-does-not-require-documents"; name = "casino that does not require documents" },
    @{ slug = "casino-without-document-upload"; name = "casino without document upload" },
    @{ slug = "casino-without-passport"; name = "casino without passport" },
    @{ slug = "casino-registration-without-documents"; name = "casino registration without documents" }
  )
  "casino without selfie" = @(
    @{ slug = "casino-without-selfie"; name = "casino without selfie" },
    @{ slug = "casino-does-not-require-selfie"; name = "casino that does not require selfie" },
    @{ slug = "withdrawal-without-selfie"; name = "withdrawal without selfie" },
    @{ slug = "casino-without-passport-selfie"; name = "casino without passport selfie" }
  )
  "casino without KYC" = @(
    @{ slug = "casino-without-kyc"; name = "casino without KYC" },
    @{ slug = "no-kyc-casino"; name = "no KYC casino" },
    @{ slug = "kyc-free-casino"; name = "KYC-free casino" },
    @{ slug = "casino-does-not-require-kyc"; name = "casino that does not require KYC" },
    @{ slug = "no-kyc-withdrawal"; name = "no KYC withdrawal" }
  )
  "casino without identification" = @(
    @{ slug = "casino-without-identification"; name = "casino without identification" },
    @{ slug = "casino-does-not-require-identification"; name = "casino that does not require identification" },
    @{ slug = "casino-without-identity-confirmation"; name = "casino without identity confirmation" },
    @{ slug = "casino-without-id"; name = "casino without ID" },
    @{ slug = "casino-no-id-verification"; name = "casino no ID verification" },
    @{ slug = "casino-without-verification"; name = "casino without verification" },
    @{ slug = "no-verification-casino"; name = "no verification casino" }
  )
  "casino without checks" = @(
    @{ slug = "casino-without-checks"; name = "casino without checks" },
    @{ slug = "casino-does-not-require-checks"; name = "casino that does not require checks" },
    @{ slug = "casino-without-document-check"; name = "casino without document check" },
    @{ slug = "play-without-checks"; name = "play without checks" }
  )
  "no identity request" = @(
    @{ slug = "casino-no-identity-request"; name = "casino without identity request" },
    @{ slug = "casino-does-not-request-identity"; name = "casino that does not request identity" },
    @{ slug = "no-identity-request-casino"; name = "no identity request casino" },
    @{ slug = "casino-without-identity-request-on-withdrawal"; name = "casino without identity request on withdrawal" }
  )
  "withdrawal without identification" = @(
    @{ slug = "withdrawal-without-identification"; name = "withdrawal without identification" },
    @{ slug = "withdrawal-does-not-require-identification"; name = "withdrawal that does not require identification" },
    @{ slug = "withdrawal-without-verification"; name = "withdrawal without verification" },
    @{ slug = "withdrawal-without-documents"; name = "withdrawal without documents" },
    @{ slug = "withdrawal-without-passport"; name = "withdrawal without passport" },
    @{ slug = "casino-withdrawal-without-documents"; name = "casino withdrawal without documents" },
    @{ slug = "same-wallet-withdrawal-no-kyc"; name = "same wallet withdrawal without verification" },
    @{ slug = "fast-withdrawal-without-verification"; name = "fast withdrawal without verification" }
  )
  "bookmaker without verification" = @(
    @{ slug = "bookmaker-without-verification"; name = "bookmaker without verification" },
    @{ slug = "sportsbook-without-verification"; name = "sportsbook without verification" },
    @{ slug = "betting-without-verification"; name = "betting without verification" },
    @{ slug = "bookmaker-no-kyc"; name = "bookmaker no KYC" },
    @{ slug = "sports-betting-no-kyc"; name = "sports betting no KYC" },
    @{ slug = "casino-and-bookmaker-without-verification"; name = "casino and bookmaker without verification" }
  )
}

$seen = @{}
$out = [ordered]@{}
foreach ($cat in $categories.Keys) {
  $list = @()
  foreach ($t in $categories[$cat]) {
    $slug = [string]$t.slug
    if ($seen.ContainsKey($slug)) { continue }
    $seen[$slug] = $true
    $name = [string]$t.name
    $list += [ordered]@{ slug = $slug; name = $name; nameEn = $name }
  }
  $out[$cat] = $list
}

$path = Join-Path (Split-Path $PSScriptRoot -Parent) 'data\search-tags.json'
[System.IO.File]::WriteAllText($path, ($out | ConvertTo-Json -Depth 5))
Write-Host "written $path tags $($seen.Count)"