(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{15946:function(t,e,a){"use strict";a.d(e,{e:function(){return w}});var o,r=a(4965),n=a(45548),i=a(91640),s=a(88802),l=a(51680),d=a(55466),u=a(99857),c=a(52983),m=a(49513),f=a(69778),p=a(10840),k=a(20970),g=a(95680),v=a(68208),O=(o=(0,r._)(function(t){var e,a,o,r,l,d,u,c,m,f,p,k;return(0,s.Jh)(this,function(s){switch(s.label){case 0:return e=t.address,a=t.rewardVaultContract,[4,Promise.all([t.operatorStakingPoolContract.isOperator(e),a.getMultiplier(e),a.getMultiplierDuration(),a.getRewardPerTokenUpdatedAt(),a.calculateLatestStakerReward(e),a.isPaused()])];case 1:return r=(o=v._.apply(void 0,[s.sent(),6]))[0],l=o[1],d=o[2],u=o[3],c=o[4],m=o[5],k={multiplier:l,multiplierDuration:d,claimableBaseReward:f=c[0].vestedBaseReward,lockedBaseReward:p=c[1],fullBaseReward:f.add(p),rewardPerTokenUpdatedAt:u,claimableDelegatedReward:c[0].vestedDelegatedReward,isPaused:m},[2,(0,i._)((0,n._)({},k),{isOperator:r})]}})}),function(t){return o.apply(this,arguments)}),S=a(46851),h=a(66424),P={isOperator:!1,delegationRate:d.O$.from(0),multiplier:d.O$.from(0),multiplierDuration:d.O$.from(0),claimableBaseReward:d.O$.from(0),fullBaseReward:d.O$.from(0),lockedBaseReward:d.O$.from(0),rewardPerTokenUpdatedAt:d.O$.from(0),hasLoadingError:!1,multiplierDurationDays:0,rampUpPeriodProgressDays:0,rewardsSurrendered:d.O$.from(0),claimableDelegatedReward:d.O$.from(0),isPaused:!1,isLoaded:!1},w=function(t){var e=t.network,a=(0,g.D)(),o=p.QW[e],v=o.rewardVaultContractV2,w=o.delegationRateV2,R=(0,h.H)({network:e,wallet:a}),A=R.operatorStakingPoolContract,b=R.contractState.data.isNodeOperator,$=c.useMemo(function(){if(a.isConnected)return(0,k.v)(v,f,a.getSigner())},[a,e]),C=a.isConnected?(0,m.h)(e,p.QW):void 0;return{contractState:(0,l.a)({queryKey:S.K.rewardVault({chainId:null==C?void 0:C.chainId,wallet:a,rewardVaultContract:$,operatorStakingPoolContract:A,isNodeOperator:b}),initialData:P,queryFn:(0,r._)(function(){var t,e,o,r,l,c,m;return(0,s.Jh)(this,function(s){switch(s.label){case 0:if(!a.isConnected||!(null==C?void 0:C.chainId)||!A||!$)return[2,P];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,O({address:a.address,rewardVaultContract:$,operatorStakingPoolContract:A})];case 2:return e=(t=s.sent()).multiplierDuration,o=t.multiplier,r=t.lockedBaseReward,l=e.div(3600).div(24).toNumber(),c=u.parseEther("1"),m=d.O$.from(o).mul(l).div(c).toNumber(),[2,(0,i._)((0,n._)({},t),{delegationRate:d.O$.from(w),hasLoadingError:!1,multiplierDurationDays:l,rampUpPeriodProgressDays:m,rewardsSurrendered:r,isLoaded:!0})];case 3:return console.error(s.sent()),[2,(0,i._)((0,n._)({},P),{hasLoadingError:!0})];case 4:return[2]}})})}),rewardVaultContract:$}}},66424:function(t,e,a){"use strict";a.d(e,{H:function(){return O}});var o=a(4965),r=a(68208),n=a(88802),i=a(51680),s=a(55466),l=a(43114),d=a(52983),u=a(51530),c=a(49513),m=a(18236),f=a(23907),p=a(10840),k=a(20970),g=a(46851),v={linkBalance:s.O$.from(0),stakedAmount:s.O$.from(0),remainingAllotment:s.O$.from(0),stakeMinLimit:s.O$.from(0),stakeMaxLimit:s.O$.from(0),maxPoolSize:s.O$.from(0),operatorMaxPoolSize:s.O$.from(0),communityMaxPoolSize:s.O$.from(0),totalStakedAmount:s.O$.from(0),totalCommunityStakedAmount:s.O$.from(0),totalOperatorStakedAmount:s.O$.from(0),isNodeOperator:!1,isActive:!1,isPaused:!1,isStakeLimitReached:!1,isEarlyAccessFinished:!1,root:"0x00000000000000000000000000000000",unbondingEndsAt:s.O$.from(0),claimPeriodEndsAt:s.O$.from(0),unbondingParams:[s.O$.from(0),s.O$.from(0)],isLoaded:!1,isOpen:!1},O=function(t){var e=t.network,a=t.wallet,s=a.isConnected?(0,c.h)(e,p.QW):void 0,O=d.useMemo(function(){if(a.isConnected){var t=null==s?void 0:s.communityStakingPoolContractV2;if(t)return(0,k.v)(t,m,a.getSigner())}},[a,s]),S=d.useMemo(function(){if(a.isConnected){var t=null==s?void 0:s.operatorStakingPoolContractV2;if(t)return(0,k.v)(t,f,a.getSigner())}},[a,s]),h=d.useMemo(function(){if(a.isConnected&&(null==s?void 0:s.linkTokenAddress))return(0,k.v)(s.linkTokenAddress,u,a.getSigner())},[a,s]);return{contractState:(0,i.a)({queryKey:g.K.stakingPool({communityStakingPoolContract:O,operatorStakingPoolContract:S,linkContract:h,wallet:a,chainId:null==s?void 0:s.chainId}),initialData:v,refetchInterval:9e4,enabled:a.isConnected&&a.isSupportedChain,queryFn:(0,o._)(function(){var t,e,o,i,d,u,c,m,f,p,k,g,P,w,R,A,b,$,C,_,y,E,N,L,V;return(0,n.Jh)(this,function(n){switch(n.label){case 0:if(!a.isConnected||!(null==s?void 0:s.chainId)||!O||!S||!h)return[2,v];return[4,S.isOperator(a.address)];case 1:return e=(t=n.sent())?S:O,[4,Promise.all([h.balanceOf(a.address),e.getStakerPrincipal(a.address),e.getStakerLimits(),e.isActive(),e.paused(),S.getMaxPoolSize(),O.getMaxPoolSize(),S.getTotalPrincipal(),O.getTotalPrincipal(),O.getMerkleRoot(),e.getUnbondingEndsAt(a.address),e.getClaimPeriodEndsAt(a.address),e.getUnbondingParams(),e.isOpen()])];case 2:return i=(o=r._.apply(void 0,[n.sent(),14]))[0],d=o[1],u=o[2],c=o[3],m=o[4],f=o[5],p=o[6],k=o[7],g=o[8],P=o[9],w=o[10],R=o[11],A=o[12],b=o[13],C=($=(0,r._)(u,2))[0],_=$[1],y=P===(0,l.formatBytes32String)(""),E=d.eq(_),N=_.sub(d),L=g.add(k),V=t?f:p,[2,{linkBalance:i,stakedAmount:d,isNodeOperator:t,stakeMinLimit:C,stakeMaxLimit:_,isActive:c,isPaused:m,maxPoolSize:V,operatorMaxPoolSize:f,communityMaxPoolSize:p,totalStakedAmount:L,totalCommunityStakedAmount:g,totalOperatorStakedAmount:k,root:P,isEarlyAccessFinished:y,isStakeLimitReached:E,remainingAllotment:N,unbondingEndsAt:w,claimPeriodEndsAt:R,unbondingParams:A,isOpen:b,isLoaded:!0}]}})})}),communityStakingPoolContract:O,linkContract:h,operatorStakingPoolContract:S}}},25327:function(t,e){"use strict";e.Z={EARLY_ACCESS_END_DATE:"1670518800000",MICRO_LINK:"0.000001",DELEGATION_RATE_BASIS_POINTS_DENOMINATOR:1e4,ALL_POOLS:"0x0000000000000000000000000000000000000000"}},15061:function(t,e,a){"use strict";a.d(e,{S:function(){return c}});var o=a(78151),r=a(97458),n=a(85655),i=a.n(n);a(52983);var s=a(73457),l=a(24755),d=a(61303),u=a.n(d);function c(t){var e,a=t.isRewardVaultPaused,n=t.areStakingPoolsPaused,d=t.showAsCard,c=(0,l.W)(u().container,(e={},(0,o._)(e,"".concat(u().banner),!d),(0,o._)(e,"".concat(u().card),d),e));return(0,r.jsx)(s.bZ,{headline:a&&n?"v0.2 staking and rewards are temporarily paused":a?"The v0.2 rewards pool has been temporarily paused":"The v0.2 staking pool has been temporarily paused",type:"error",support:a&&n?(0,r.jsxs)("span",{children:["The ability to stake LINK and claim rewards has been paused. Unbonding is still operational. Follow"," ",(0,r.jsx)(i(),{target:"_blank",href:"https://twitter.com/chainlink",children:"@chainlink"})," ","to get the latest updates."]}):a?(0,r.jsxs)("span",{children:["The ability to claim rewards has been paused. Unbonding is still operational. Follow"," ",(0,r.jsx)(i(),{target:"_blank",href:"https://twitter.com/chainlink",children:"@chainlink"})," ","to get the latest updates."]}):(0,r.jsxs)("span",{children:["The ability to stake LINK has been paused. Unbonding and rewards claiming is still operational. Follow"," ",(0,r.jsx)(i(),{target:"_blank",href:"https://twitter.com/chainlink",children:"@chainlink"})," ","to get the latest updates."]}),className:c})}},60945:function(t,e,a){"use strict";a.d(e,{W:function(){return r}});var o=a(55466),r=function(t){var e=t.emissionRate,a=t.totalPoolStakedAmount;return a.eq(0)?o.O$.from(0):e.mul(31536e3).mul(o.O$.from(10).pow(18)).div(a)}},8211:function(t,e,a){"use strict";a.d(e,{r:function(){return f}});var o=a(51680),r=a(55466),n=a(10840),i=a(25327),s=a(60945),l=a(37478),d=a(20813),u=a(25343),c={nopVariableRewardRate:r.O$.from(0),nopFloorRewardRate:r.O$.from(0),csVariableRewardRate:r.O$.from(0),csFloorRewardRate:r.O$.from(0),totalEmissionRate:r.O$.from(0),nopEmissionRate:r.O$.from(0),csEmissionRate:r.O$.from(0),delegatedEmissionRate:r.O$.from(0),totalFloorRewardRate:r.O$.from(0)},m=function(t,e,a,o,n,l){var d,u,m,f,p=r.O$.from(0);if(!(null==t?void 0:null===(u=t.allStakingv02RewardVaultEmissionRates)||void 0===u?void 0:null===(d=u.nodes[0])||void 0===d?void 0:d.emissionRate))return c;var k=r.O$.from(10).pow(18),g=r.O$.from(null==t?void 0:null===(f=t.allStakingv02RewardVaultEmissionRates)||void 0===f?void 0:null===(m=f.nodes[0])||void 0===m?void 0:m.emissionRate),v=r.O$.from(e).add(a).mul(k),O=g.mul(r.O$.from(e).mul(k)).div(v),S=g.sub(O),h=S.mul(o).div(i.Z.DELEGATION_RATE_BASIS_POINTS_DENOMINATOR),P=S.sub(h),w=O.add(h);return{nopVariableRewardRate:(0,s.W)({emissionRate:w,totalPoolStakedAmount:n||p}),nopFloorRewardRate:(0,s.W)({emissionRate:w,totalPoolStakedAmount:r.O$.from(e).mul(k)}),csVariableRewardRate:(0,s.W)({emissionRate:P,totalPoolStakedAmount:l||p}),csFloorRewardRate:(0,s.W)({emissionRate:P,totalPoolStakedAmount:r.O$.from(a).mul(k)}),totalFloorRewardRate:(0,s.W)({emissionRate:g,totalPoolStakedAmount:v}),totalEmissionRate:g,nopEmissionRate:w,csEmissionRate:P,delegatedEmissionRate:h}},f=function(t){var e=(0,u.b)(t),a=e.isLoading,r=e.data,s=r.totalNopStakedAmount,f=r.totalCsStakedAmount;return(0,o.a)({queryKey:["reward-rates",t,s,f,a],initialData:c,queryFn:function(){if(a)return c;var e=n.QW[t],o=e.atlasNetworkName,r=e.rewardVaultContractV2,u=e.nopPoolSizeV2,p=e.csPoolSizeV2,k=e.delegationRateV2;return d.L.request(l.bL,{schemaName:o,contractAddress:r,pool:i.Z.ALL_POOLS}).then(function(t){return m(t,u,p,k,s,f)})}})}},25343:function(t,e,a){"use strict";a.d(e,{b:function(){return c}});var o=a(51680),r=a(55466),n=a(46851),i=a(10840),s=a(37478),l=a(20813),d={totalNopStakedAmount:r.O$.from(0),totalCsStakedAmount:r.O$.from(0)},u=function(t){if(!t||!t.length)return d;var e,a,o,n,i,s,l=null===(o=t[0])||void 0===o?void 0:null===(a=o.allStakingv02StakingPoolPrincipals)||void 0===a?void 0:null===(e=a.nodes[0])||void 0===e?void 0:e.totalPrincipal,u=null===(s=t[1])||void 0===s?void 0:null===(i=s.allStakingv02StakingPoolPrincipals)||void 0===i?void 0:null===(n=i.nodes[0])||void 0===n?void 0:n.totalPrincipal;return{totalNopStakedAmount:u?r.O$.from(u):r.O$.from(0),totalCsStakedAmount:l?r.O$.from(l):r.O$.from(0)}},c=function(t){var e=(0,o.a)({queryKey:n.K.totalAmounts({network:t,version:"0.2"}),enabled:!!t,queryFn:function(){return function(t){if(!i.QW[t].operatorStakingPoolContractV2||!i.QW[t].communityStakingPoolContractV2)throw Error("No staking contract addresses provided");var e=i.QW[t],a=e.atlasNetworkName,o=e.operatorStakingPoolContractV2,r=e.communityStakingPoolContractV2;return Promise.all([l.L.request(s.uN,{schemaName:a,contractAddress:r}),l.L.request(s.uN,{schemaName:a,contractAddress:o})])}(t)},refetchInterval:15e3,refetchOnWindowFocus:!0});return{isLoading:e.isLoading,isError:e.isError,data:u(e.data)}}},61303:function(t){t.exports={container:"emergencyPauseNotice_container__7byjg",banner:"emergencyPauseNotice_banner__6lDiF",card:"emergencyPauseNotice_card__fCnRA"}}}]);