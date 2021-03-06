/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * topic返回信息展示字段
 * @class
 */
class TopicSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * TopicName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * MsgRetentionSeconds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * MaxMsgSize
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Qps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * FilterType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * CreateTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * LastModifyTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * MsgCount
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * CreateUin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Tags
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 主题是否开启消息轨迹，true表示开启，false表示不开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * RewindQueue请求参数结构体
 * @class
 */
class RewindQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * QueueName
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。
         * @type {number || null}
         */
        this.StartConsumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.StartConsumeTime = 'StartConsumeTime' in params ? params.StartConsumeTime : null;

    }
}

/**
 * DescribeSubscriptionDetail请求参数结构体
 * @class
 */
class DescribeSubscriptionDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 目前只支持SubscriptionName，且仅支持一个关键字
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyQueueAttribute返回参数结构体
 * @class
 */
class ModifyQueueAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateQueue请求参数结构体
 * @class
 */
class CreateQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 队列是否开启回溯消息能力，该参数取值范围0-msgRetentionSeconds,即最大的回溯时间为消息在队列中的保留周期，0表示不开启。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 1 表示事务队列，0 表示普通队列
         * @type {number || null}
         */
        this.Transaction = null;

        /**
         * 第一次回查间隔
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大回查次数
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * 死信策略。0为消息被多次消费未删除，1为Time-To-Live过期
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 最大接收次数 1-1000
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间msgRetentionSeconds
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 是否开启消息轨迹追踪，当不设置字段时，默认为不开启，该字段为true表示开启，为false表示不开启
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * ModifySubscriptionAttribute返回参数结构体
 * @class
 */
class ModifySubscriptionAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeadLetterPolicy
 * @class
 */
class DeadLetterPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * DeadLetterQueueName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * DeadLetterQueue
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterQueue = null;

        /**
         * Policy
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * MaxTimeToLive
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * MaxReceiveCount
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.DeadLetterQueue = 'DeadLetterQueue' in params ? params.DeadLetterQueue : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;

    }
}

/**
 * ModifyTopicAttribute返回参数结构体
 * @class
 */
class ModifyTopicAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscribe请求参数结构体
 * @class
 */
class DeleteSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * SubscriptionName
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * DescribeSubscriptionDetail返回参数结构体
 * @class
 */
class DescribeSubscriptionDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Subscription属性集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Subscription> || null}
         */
        this.SubscriptionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SubscriptionSet) {
            this.SubscriptionSet = new Array();
            for (let z in params.SubscriptionSet) {
                let obj = new Subscription();
                obj.deserialize(params.SubscriptionSet[z]);
                this.SubscriptionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubscribe请求参数结构体
 * @class
 */
class CreateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * SubscriptionName
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Endpoint
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * NotifyStrategy
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * FilterTag
         * @type {Array.<string> || null}
         */
        this.FilterTag = null;

        /**
         * BindingKey
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * NotifyContentFormat
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.FilterTag = 'FilterTag' in params ? params.FilterTag : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * ClearQueue请求参数结构体
 * @class
 */
class ClearQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名称
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTopic返回参数结构体
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearSubscriptionFilterTags返回参数结构体
 * @class
 */
class ClearSubscriptionFilterTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDeadLetter返回参数结构体
 * @class
 */
class UnbindDeadLetterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransactionPolicy
 * @class
 */
class TransactionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * FirstQueryInterval
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * MaxQueryCount
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxQueryCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;

    }
}

/**
 * DescribeTopicDetail请求参数结构体
 * @class
 */
class DescribeTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 目前只支持过滤TopicName ， 且只能填一个过滤值
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * TagKey
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 精确匹配TopicName
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DeleteTopic请求参数结构体
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeTopicDetail返回参数结构体
 * @class
 */
class DescribeTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TotalCount
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * TopicSet
         * @type {Array.<TopicSet> || null}
         */
        this.TopicSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicSet) {
            this.TopicSet = new Array();
            for (let z in params.TopicSet) {
                let obj = new TopicSet();
                obj.deserialize(params.TopicSet[z]);
                this.TopicSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQueueDetail返回参数结构体
 * @class
 */
class DescribeQueueDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * queue总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * queue列表
         * @type {Array.<QueueSet> || null}
         */
        this.QueueSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new QueueSet();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDeadLetter请求参数结构体
 * @class
 */
class UnbindDeadLetterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTopic请求参数结构体
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * MaxMsgSize
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * FilterType
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * MsgRetentionSeconds
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DeleteQueue请求参数结构体
 * @class
 */
class DeleteQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名称
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * 过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数的名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数值
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeDeadLetterSourceQueues返回参数结构体
 * @class
 */
class DescribeDeadLetterSourceQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足本次条件的队列个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 死信队列源队列
         * @type {Array.<DeadLetterSource> || null}
         */
        this.QueueSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new DeadLetterSource();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RewindQueue返回参数结构体
 * @class
 */
class RewindQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopicAttribute请求参数结构体
 * @class
 */
class ModifyTopicAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * MaxMsgSize
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * MsgRetentionSeconds
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DescribeQueueDetail请求参数结构体
 * @class
 */
class DescribeQueueDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选参数，目前支持QueueName筛选，且仅支持一个关键字
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签搜索
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 精确匹配QueueName
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * 批量queue属性信息
 * @class
 */
class QueueSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * QueueId
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * QueueName
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Qps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Bps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bps = null;

        /**
         * MaxDelaySeconds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDelaySeconds = null;

        /**
         * MaxMsgHeapNum
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * PollingWaitSeconds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * MsgRetentionSeconds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * VisibilityTimeout
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * MaxMsgSize
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * RewindSeconds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * CreateTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * LastModifyTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * ActiveMsgNum
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveMsgNum = null;

        /**
         * InactiveMsgNum
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InactiveMsgNum = null;

        /**
         * DelayMsgNum
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayMsgNum = null;

        /**
         * RewindMsgNum
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewindMsgNum = null;

        /**
         * MinMsgTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinMsgTime = null;

        /**
         * Transaction
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Transaction = null;

        /**
         * DeadLetterSource
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeadLetterSource> || null}
         */
        this.DeadLetterSource = null;

        /**
         * DeadLetterPolicy
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeadLetterPolicy || null}
         */
        this.DeadLetterPolicy = null;

        /**
         * TransactionPolicy
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TransactionPolicy || null}
         */
        this.TransactionPolicy = null;

        /**
         * 创建者uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 消息轨迹表示，true表示开启，false表示不开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Bps = 'Bps' in params ? params.Bps : null;
        this.MaxDelaySeconds = 'MaxDelaySeconds' in params ? params.MaxDelaySeconds : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.ActiveMsgNum = 'ActiveMsgNum' in params ? params.ActiveMsgNum : null;
        this.InactiveMsgNum = 'InactiveMsgNum' in params ? params.InactiveMsgNum : null;
        this.DelayMsgNum = 'DelayMsgNum' in params ? params.DelayMsgNum : null;
        this.RewindMsgNum = 'RewindMsgNum' in params ? params.RewindMsgNum : null;
        this.MinMsgTime = 'MinMsgTime' in params ? params.MinMsgTime : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;

        if (params.DeadLetterSource) {
            this.DeadLetterSource = new Array();
            for (let z in params.DeadLetterSource) {
                let obj = new DeadLetterSource();
                obj.deserialize(params.DeadLetterSource[z]);
                this.DeadLetterSource.push(obj);
            }
        }

        if (params.DeadLetterPolicy) {
            let obj = new DeadLetterPolicy();
            obj.deserialize(params.DeadLetterPolicy)
            this.DeadLetterPolicy = obj;
        }

        if (params.TransactionPolicy) {
            let obj = new TransactionPolicy();
            obj.deserialize(params.TransactionPolicy)
            this.TransactionPolicy = obj;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DeleteTopic返回参数结构体
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearSubscriptionFilterTags请求参数结构体
 * @class
 */
class ClearSubscriptionFilterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * SubscriptionName
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * CreateQueue返回参数结构体
 * @class
 */
class CreateQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的queueId
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscribe返回参数结构体
 * @class
 */
class DeleteSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeadLetterSourceQueues请求参数结构体
 * @class
 */
class DescribeDeadLetterSourceQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤死信队列源队列名称，目前仅支持SourceQueueName过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DeadLetterSource
 * @class
 */
class DeadLetterSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * QueueId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * QueueName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateSubscribe返回参数结构体
 * @class
 */
class CreateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SubscriptionId
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearQueue返回参数结构体
 * @class
 */
class ClearQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubscriptionAttribute请求参数结构体
 * @class
 */
class ModifySubscriptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * SubscriptionName
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * NotifyStrategy
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * NotifyContentFormat
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

        /**
         * FilterTags
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * BindingKey
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;

    }
}

/**
 * 订阅返回参数
 * @class
 */
class Subscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * SubscriptionName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * SubscriptionId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * TopicOwner
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicOwner = null;

        /**
         * MsgCount
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * LastModifyTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * CreateTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * BindingKey
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * Endpoint
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * FilterTags
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * Protocol
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * NotifyStrategy
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * NotifyContentFormat
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.TopicOwner = 'TopicOwner' in params ? params.TopicOwner : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * DeleteQueue返回参数结构体
 * @class
 */
class DeleteQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyQueueAttribute请求参数结构体
 * @class
 */
class ModifyQueueAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * QueueName
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * MaxMsgHeapNum
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * PollingWaitSeconds
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * VisibilityTimeout
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * MaxMsgSize
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * MsgRetentionSeconds
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * RewindSeconds
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * FirstQueryInterval
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * MaxQueryCount
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * DeadLetterQueueName
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * MaxTimeToLive
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * MaxReceiveCount
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * Policy
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

module.exports = {
    TopicSet: TopicSet,
    RewindQueueRequest: RewindQueueRequest,
    DescribeSubscriptionDetailRequest: DescribeSubscriptionDetailRequest,
    ModifyQueueAttributeResponse: ModifyQueueAttributeResponse,
    CreateQueueRequest: CreateQueueRequest,
    ModifySubscriptionAttributeResponse: ModifySubscriptionAttributeResponse,
    DeadLetterPolicy: DeadLetterPolicy,
    ModifyTopicAttributeResponse: ModifyTopicAttributeResponse,
    DeleteSubscribeRequest: DeleteSubscribeRequest,
    DescribeSubscriptionDetailResponse: DescribeSubscriptionDetailResponse,
    CreateSubscribeRequest: CreateSubscribeRequest,
    ClearQueueRequest: ClearQueueRequest,
    CreateTopicResponse: CreateTopicResponse,
    ClearSubscriptionFilterTagsResponse: ClearSubscriptionFilterTagsResponse,
    UnbindDeadLetterResponse: UnbindDeadLetterResponse,
    TransactionPolicy: TransactionPolicy,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    DescribeQueueDetailResponse: DescribeQueueDetailResponse,
    UnbindDeadLetterRequest: UnbindDeadLetterRequest,
    CreateTopicRequest: CreateTopicRequest,
    DeleteQueueRequest: DeleteQueueRequest,
    Filter: Filter,
    DescribeDeadLetterSourceQueuesResponse: DescribeDeadLetterSourceQueuesResponse,
    RewindQueueResponse: RewindQueueResponse,
    ModifyTopicAttributeRequest: ModifyTopicAttributeRequest,
    DescribeQueueDetailRequest: DescribeQueueDetailRequest,
    QueueSet: QueueSet,
    DeleteTopicResponse: DeleteTopicResponse,
    ClearSubscriptionFilterTagsRequest: ClearSubscriptionFilterTagsRequest,
    CreateQueueResponse: CreateQueueResponse,
    DeleteSubscribeResponse: DeleteSubscribeResponse,
    DescribeDeadLetterSourceQueuesRequest: DescribeDeadLetterSourceQueuesRequest,
    Tag: Tag,
    DeadLetterSource: DeadLetterSource,
    CreateSubscribeResponse: CreateSubscribeResponse,
    ClearQueueResponse: ClearQueueResponse,
    ModifySubscriptionAttributeRequest: ModifySubscriptionAttributeRequest,
    Subscription: Subscription,
    DeleteQueueResponse: DeleteQueueResponse,
    ModifyQueueAttributeRequest: ModifyQueueAttributeRequest,

}
